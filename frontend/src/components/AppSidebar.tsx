// src/components/AppSidebar.tsx
import { Folder, Share, Plus, User, Settings, Home as HomeIcon, Eye, Download, LogOutIcon, PenIcon } from "lucide-react";
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
import type { AlbumType } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { updateUserName } from "@/api/api";


type AppSidebarProps = {
  albumTree: AlbumType[];
  sharedFolders: AlbumType[];
  onSelectFolder: (id: string) => void;
  onAddAlbum?: (parentId: string) => void;
  onAddPhoto?: (albumId: string) => void;
  onRenameAlbum?: (albumId: string) => void;
  onDeleteAlbum?: (albumId: string) => void;
  onSignOut?: () => void;
};

export function AppSidebar({ 
  albumTree, 
  sharedFolders, 
  onSelectFolder,
  onAddAlbum,
  onAddPhoto,
  onRenameAlbum,
  onDeleteAlbum,
  onSignOut
}: AppSidebarProps) {
  console.log(albumTree)

  const handleAddAlbum = (parentId: string) => {
    if (onAddAlbum) onAddAlbum(parentId);
  };
  
  const handleAddPhoto = (albumId: string) => {
    if (onAddPhoto) onAddPhoto(albumId);
  };
  
  const handleRenameAlbum = (albumId: string) => {
    if (onRenameAlbum) onRenameAlbum(albumId);
  };
  
  const handleDeleteAlbum = (albumId: string) => {
    if (onDeleteAlbum) onDeleteAlbum(albumId);
  };


  return (
    <Sidebar className="border-r border-border bg-card w-64">
      <SidebarContent>
        {/* アプリケーションのヘッダー部分 */}
        <div className="flex items-center gap-2 px-4 h-14 border-b border-border">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs font-bold">P</div>
          <h2 className="text-lg font-semibold">PhotoShare</h2>
        </div>

        {/* 自分のフォルダ - 階層表示 */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between items-center px-2 py-1.5 text-muted-foreground text-xs uppercase font-medium">
            <span>My Albums</span>
            <SidebarMenuButton className="h-5 w-5">
              <Plus className="h-3.5 w-3.5" />
            </SidebarMenuButton>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {albumTree.map((album) => (
                <AlbumTreeNode
                  key={album.id}
                  album={album}
                  onSelectFolder={onSelectFolder}
                  onAddAlbum={handleAddAlbum}
                  onAddPhoto={handleAddPhoto}
                  onRenameAlbum={handleRenameAlbum}
                  onDeleteAlbum={handleDeleteAlbum}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* 共有フォルダ */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 py-1.5 text-muted-foreground text-xs uppercase font-medium">
            Shared With Me
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sharedFolders.map((folder) => (
                <SidebarMenuItem key={folder.id}>
                  <SidebarMenuButton onClick={() => onSelectFolder(folder.id)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    <Share className="h-4 w-4" />
                    <span>{folder.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* フッター */}
      <div className="mt-auto border-t border-border p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <SidebarMenuButton className="w-full justify-between items-center gap-2 rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm">User Name</span>
          </div>
          <Settings className="h-4 w-4 text-muted-foreground" />
        </SidebarMenuButton>
        </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem >
              <LogOutIcon className="mr-2 h-4 w-4" onClick={onSignOut}/>
              <span>サインアウト</span>
            </DropdownMenuItem>
            <DropdownMenuItem >
              <PenIcon className="mr-2 h-4 w-4" onClick={()=>updateUserName()}/>
              <span>名前変更</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Sidebar>
  );
}