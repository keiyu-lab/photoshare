import type { AlbumType } from "@/types";
import { useState } from "react";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Album, ChevronDown, ChevronRight, Folder, Pencil, PlusCircle, Trash2, Image } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";

export const buildAlbumTree = (albums: AlbumType[]): AlbumType[] => {
  const map = new Map<string, AlbumType>();
  const roots: AlbumType[] = [];

  // Map に各アルバムを登録
  for (const album of albums) {
    map.set(album.id, { ...album, children: [] });
  }

  // 親に children を割り当てる
  for (const album of albums) {
    const node = map.get(album.id)!;
    if (album.parentAlbumId) {
      const parent = map.get(album.parentAlbumId);
      if (parent) {
        parent.children?.push(node);
      }
    } else {
      roots.push(node); // parentAlbumId === null → root
    }
  }

  return roots;
}

export const findAlbumById = (tree: AlbumType[], id: string): AlbumType | null  =>{
  for (const album of tree) {
    if (album.id === id) {
      return album;
    }
    if (album.children) {
      const found = findAlbumById(album.children, id);
      if (found) return found;
    }
  }
  return null;
}

export const flattenAlbums = (tree: AlbumType[]): AlbumType[] => {
  const result: AlbumType[] = [];

  const traverse = (node: AlbumType) => {
    result.push({ ...node, children: undefined });
    node.children?.forEach(traverse);
  };

  tree.forEach(traverse);
  return result;
};

export const normailzeRowAlbum = (albumList: any) => {
  const normalizedAlbums = albumList.map((a:any) => ({
        id: a.id,
        name: a.name,
        parentAlbumId: a.parent_album_id,
        ownerUserId: a.owner_user_id,
  }));
  return normalizedAlbums;
}

export const AlbumTreeNode = ({ 
  album, 
  level = 0, 
  onSelectFolder,
  onAddAlbum,
  onAddPhoto,
  onRenameAlbum,
  onDeleteAlbum
}: { 
  album: AlbumType;
  level?: number;
  onSelectFolder: (id: string) => void;
  onAddAlbum?: (parentId: string) => void;
  onAddPhoto?: (albumId: string) => void;
  onRenameAlbum?: (albumId: string) => void;
  onDeleteAlbum?: (albumId: string) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = album.children && album.children.length > 0;

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  
  const handleAddAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddAlbum) onAddAlbum(album.id);
  };
  
  const handleAddPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddPhoto) onAddPhoto(album.id);
  };
  
  const handleRenameAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRenameAlbum) onRenameAlbum(album.id);
  };
  
  const handleDeleteAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDeleteAlbum) onDeleteAlbum(album.id);
  };
  
  
   return (
    <div className="w-full">
      <SidebarMenuItem>
        <ContextMenu>
          <ContextMenuTrigger>
            <SidebarMenuButton
              onClick={() => onSelectFolder(album.id)} 
              className="flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
              style={{ paddingLeft: `${(level * 16) + 8}px` }}
            >
              {hasChildren && (
                <button 
                  onClick={toggleExpand} 
                  className="h-4 w-4 flex items-center justify-center mr-1"
                >
                  {isExpanded ? 
                    <ChevronDown className="h-3 w-3" /> : 
                    <ChevronRight className="h-3 w-3" />
                  }
                </button>
              )}
              {!hasChildren && <div className="w-4 mr-1" />}
              <Folder className="h-4 w-4" />
              <span>{album.name}</span>
            </SidebarMenuButton>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuItem onClick={handleAddAlbum}>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>アルバム追加</span>
            </ContextMenuItem>
            <ContextMenuItem onClick={handleAddPhoto}>
              <Image className="mr-2 h-4 w-4" />
              <span>写真追加</span>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={handleRenameAlbum}>
              <Pencil className="mr-2 h-4 w-4" />
              <span>アルバム名変更</span>
            </ContextMenuItem>
            <ContextMenuItem onClick={handleDeleteAlbum} className="text-destructive focus:text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              <span>アルバム削除</span>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </SidebarMenuItem>
      
      {isExpanded && hasChildren && (
        <div className="w-full">
          {album.children.map((child) => (
            <AlbumTreeNode 
              key={child.id} 
              album={child} 
              level={level + 1}
              onSelectFolder={onSelectFolder}
              onAddAlbum={onAddAlbum}
              onAddPhoto={onAddPhoto}
              onRenameAlbum={onRenameAlbum}
              onDeleteAlbum={onDeleteAlbum}
            />
          ))}
        </div>
      )}
    </div>
  );
};