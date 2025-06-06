// src/components/AppSidebar.tsx
import { Folder, Share, Plus, User, Settings, Home as HomeIcon, Eye, Download, LogOutIcon, PenIcon, CodeSquare } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AlbumTreeNode } from "./Album";
import type { AlbumType, UserType } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { updateUserName } from "@/api/api";
import { useEffect, useState } from "react";

type AppSidebarProps = {
  user?: UserType;
  privateAlbumTree: AlbumType[];
  sharedAlbumTree: AlbumType[];
  selectedAlbumId?: string; 
  onSelectAlbum: (id: string, isShared?: boolean) => void;
  onSelectRoot: () => void;
  onAddAlbum?: (parentId: string) => void;
  onAddPhoto?: (albumId: string) => void;
  onRenameAlbum?: (albumId: string, newName: string) => Promise<boolean>;
  onDeleteAlbum?: (albumId: string) => void;
  onShareAlbum?: (albumId: string) => void;
  onMoveAlbum?: (albumId: string, targetAlbumId: string) => void;
  onMovePhoto?: (photoId: string, targetAlbumId: string) => void;
  onSignOut?: () => void;
  selectedAlbumContext?: 'private' | 'shared'; 
  getCurrentUserPermission?: (album: AlbumType | null) => 'owner' | 'write' | 'read' | null;
};

export function AppSidebar({ 
  user,
  privateAlbumTree, 
  sharedAlbumTree, 
  selectedAlbumId,
  onSelectAlbum,
  onSelectRoot,
  onAddAlbum,
  onAddPhoto,
  onRenameAlbum,
  onDeleteAlbum,
  onShareAlbum,
  onMoveAlbum,
  onMovePhoto,
  onSignOut,
  selectedAlbumContext,
  getCurrentUserPermission,
}: AppSidebarProps) {
  // ドラッグ中のアルバムID
  const [draggedAlbumId, setDraggedAlbumId] = useState<string | null>(null);
  // ドロップターゲットのアルバムID
  const [dropTargetId, setDropTargetId] = useState<string | null>(null);

  // ドラッグ開始時の処理
  const handleDragStart = (albumId: string) => {
    setDraggedAlbumId(albumId);
  };

  // ドラッグ終了時の処理
  const handleDragEnd = () => {
    setDraggedAlbumId(null);
    setDropTargetId(null);
  };

  // ドロップターゲット設定
  const handleDragEnter = (albumId: string) => {
    if (draggedAlbumId !== albumId) {
      setDropTargetId(albumId);
    }
  };

  const handleDragLeave = () => {
    setDropTargetId(null);
  };

  // アルバム移動の実行
  const handleMoveAlbum = (albumId: string, targetAlbumId: string) => {
    if (onMoveAlbum) {
      onMoveAlbum(albumId, targetAlbumId);
    }
    setDraggedAlbumId(null);
    setDropTargetId(null);
  };

  const renderSharedAlbumTree = (albums: AlbumType[]) => {
      return albums.map((album) => (
        <AlbumTreeNode
          key={album.id}
          album={album}
          selectedAlbumId={selectedAlbumId}
          draggedAlbumId={draggedAlbumId}
          dropTargetId={dropTargetId} 
          onSelectAlbum={(id) => onSelectAlbum(id, true)}
          onAddAlbum={onAddAlbum}
          onAddPhoto={onAddPhoto}
          onRenameAlbum={onRenameAlbum}
          onDeleteAlbum={onDeleteAlbum}
          onShareAlbum={onShareAlbum}
          onMoveAlbum={handleMoveAlbum}
          onMovePhoto={onMovePhoto}
          onDragStart={handleDragStart} 
          onDragEnd={handleDragEnd} 
          onDragEnter={handleDragEnter} 
          onDragLeave={handleDragLeave} 
          isSharedAlbum={true}
          userPermission={album.userPermission || 'read'}
        />
      ));
    };

  // プライベートアルバム用のレンダリング関数
  const renderAlbumTree = (albums: AlbumType[]) => {
    return albums.map((album) => {
      return <AlbumTreeNode
        key={album.id}
        album={album}
        selectedAlbumId={selectedAlbumId}
        draggedAlbumId={draggedAlbumId}
        dropTargetId={dropTargetId}  
        onSelectAlbum={(id) => onSelectAlbum(id, false)}
        onAddAlbum={onAddAlbum}
        onAddPhoto={onAddPhoto}
        onRenameAlbum={onRenameAlbum}
        onDeleteAlbum={onDeleteAlbum}
        onShareAlbum={onShareAlbum}
        onMoveAlbum={handleMoveAlbum}
        onMovePhoto={onMovePhoto}
        onDragStart={handleDragStart} 
        onDragEnd={handleDragEnd} 
        onDragEnter={handleDragEnter} 
        onDragLeave={handleDragLeave} 
        isSharedAlbum={false}
        userPermission="owner"  // プライベートアルバムは常にowner
      />
    }
    );
  };

  return (
    <Sidebar className="border-r border-border bg-card w-64">
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 h-14 border-b border-border">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs font-bold">P</div>
          <h2 className="text-lg font-semibold">PhotoShare</h2>
        </div>

        {/* 自分のプライベートフォルダ */}
        <SidebarGroup>
          <SidebarGroupLabel
            className="flex justify-between items-center px-2 py-1.5 text-muted-foreground text-xs uppercase font-medium cursor-pointer hover:text-foreground"
            onClick={onSelectRoot} // ルートを選択
          >
            <span>My Private Albums</span>
            <SidebarMenuButton className="h-5 w-5" onClick={(e) => {
              e.stopPropagation();
              if (onAddAlbum) onAddAlbum; // ルートにアルバム追加
            }}>
              <Plus className="h-3.5 w-3.5" />
            </SidebarMenuButton>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {privateAlbumTree.length > 0 ? 
                renderAlbumTree(privateAlbumTree) : 
                <SidebarMenuItem className="px-2 py-1.5 text-sm text-muted-foreground">
                  No private albums.
                </SidebarMenuItem>
               }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* 共有アルバム (自分がオーナーで共有中 + 他人から共有されたもの) */}
        <SidebarGroup>
            <SidebarGroupLabel className="px-2 py-1.5 text-muted-foreground text-xs uppercase font-medium">
              Shared Albums 
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sharedAlbumTree.length > 0 ? 
                  renderSharedAlbumTree(sharedAlbumTree) :
                  <SidebarMenuItem className="px-2 py-1.5 text-sm text-muted-foreground">
                    No shared albums.
                  </SidebarMenuItem>
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto border-t border-border p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <SidebarMenuButton className="w-full justify-between items-center gap-2 rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
              <User className="h-4 w-4" />
            </div>
            {user && (
              <span className="text-sm">{user.name || user.email}</span>
            )}
          </div>
          <Settings className="h-4 w-4 text-muted-foreground" />
        </SidebarMenuButton>
        </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onSignOut}>
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>サインアウト</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Sidebar>
  );
}