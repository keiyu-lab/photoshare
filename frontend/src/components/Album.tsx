import type { AlbumType } from "@/types";
import { useState } from "react";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { ChevronDown, ChevronRight, Folder, Pencil, PlusCircle, Trash2, Image, Share, Eye } from "lucide-react";
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
  if(albums.length < 4)
    console.log(albums)
  // Map に各アルバムを登録
  for (const album of albums) {
    map.set(album.id, { ...album, children: [] });
  }
  if(albums.length < 4)
    console.log(map)
  // 親に children を割り当てる
  for (const album of albums) {
    const node = map.get(album.id)!;
    if (album.parent_album_id) {
      const parent = map.get(album.parent_album_id);
      if (parent) {
        parent.children?.push(node);
      } else {
        roots.push(node); // 少しおかしいかもしれない。共有アルバムが元のparent_album_idを持ったままこちらにくるのでこうしないとプッシュできない
      }
    } else {
      roots.push(node);
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
  const normalizedAlbums = albumList.map((album: any) => ({
    id: album.id,
    name: album.name,
    parent_album_id: album.parent_album_id || album.parentAlbumId || null,
    owner_user_id: album.owner_user_id || album.ownerUserId,
    children: album.children || [],
    userPermission: album.userPermission || album.role || 'read',
    isShared: album.isShared ?? (album.role !== 'owner'),
    sharedWith: album.sharedWith || [],
    owner: album.owner,
    role: album.role,
    _count: album._count,
    created_at: album.created_at,
    updated_at: album.updated_at,
  }));
  return normalizedAlbums;
};

export const AlbumTreeNode = ({ 
  album, 
  level = 0, 
  selectedAlbumId, 
  draggedAlbumId,  
  dropTargetId,  
  onSelectAlbum,
  onAddAlbum,
  onAddPhoto,
  onRenameAlbum,
  onDeleteAlbum,
  onShareAlbum,
  onMoveAlbum,
  onMovePhoto,
  onDragStart,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  isSharedAlbum = false,        
  userPermission = 'owner'      
}: { 
  album: AlbumType;
  level?: number;
  selectedAlbumId?: string; 
  draggedAlbumId?: string | null;
  dropTargetId?: string | null;
  onSelectAlbum: (id: string) => void;
  onAddAlbum?: (parentId: string) => void;
  onAddPhoto?: (albumId: string) => void;
  onRenameAlbum?: (albumId: string, newName: string) => Promise<boolean>; 
  onDeleteAlbum?: (albumId: string) => void;
  onShareAlbum?: (albumId: string) => void;
  onMoveAlbum?: (albumId: string, targetAlbumId: string) => void;
  onMovePhoto?: (photoId: string, targetAlbumId: string) => void;
  onDragStart?: (albumId: string) => void;
  onDragEnd?: () => void; 
  onDragEnter?: (albumId: string) => void;
  onDragLeave?: () => void; 
  isDragging?: boolean;
  isDropTarget?: boolean;
  isSelected?: boolean;
  isSharedAlbum?: boolean;      
  userPermission?: 'owner' | 'write' | 'read'; 
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isRenaming, setIsRenaming] = useState(false);
  const [editingName, setEditingName] = useState(album.name);
  const hasChildren = album.children && album.children.length > 0;

  const canWrite = userPermission === 'owner' || userPermission === 'write';
  const canAdmin = userPermission === 'owner';

  // このノード自身の状態を判断
  const amISelected = selectedAlbumId === album.id;
  const amIDragging = draggedAlbumId === album.id;
  const amIDropTarget = dropTargetId === album.id && draggedAlbumId !== album.id; // 自分自身へのドロップはターゲットにしない


  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };
 
  
  const handleAddAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canWrite) {
      alert('この操作を行う権限がありません');
      return;
    }
    if (onAddAlbum) onAddAlbum(album.id);
  };
  
  const handleAddPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canWrite) {
      alert('この操作を行う権限がありません');
      return;
    }
    if (onAddPhoto) onAddPhoto(album.id);
  };

  const handleRenameAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canAdmin) {
      alert('この操作を行う権限がありません');
      return;
    }
    setIsRenaming(true);
    setEditingName(album.name);
  };

  const handleDeleteAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canAdmin) {
      alert('この操作を行う権限がありません');
      return;
    }
    if (onDeleteAlbum) onDeleteAlbum(album.id);
  };

  const handleShareAlbum = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSharedAlbum && !canAdmin) {
      alert('この操作を行う権限がありません');
      return;
    }
    if (onShareAlbum) onShareAlbum(album.id);
  };

  const handleConfirmRename = async () => {
    if (editingName.trim() === album.name) {
      setIsRenaming(false);
      return;
    }

    if (onRenameAlbum) {
      const success = await onRenameAlbum(album.id, editingName.trim());
      if (success) {
        setIsRenaming(false);
      } else {
        setEditingName(album.name); // 失敗時は元の名前に戻す
      }
    }
  };

  const handleCancelRename = () => {
    setIsRenaming(false);
    setEditingName(album.name);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConfirmRename();
    } else if (e.key === 'Escape') {
      handleCancelRename();
    }
  };
  
  const handleNodeDragStart = (e: React.DragEvent) => {
    e.stopPropagation();
    e.dataTransfer.setData('application/album-id', album.id);
    e.dataTransfer.effectAllowed = 'move';
    if (onDragStart) { // AppSidebar から渡された onDragStart を呼び出す
      onDragStart(album.id);
    }
  };

  const handleNodeDragEnd = (e: React.DragEvent) => {
    e.stopPropagation();
    if (onDragEnd) { // AppSidebar から渡された onDragEnd を呼び出す
      onDragEnd();
    }
  };
  
  const handleNodeDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedAlbumId && draggedAlbumId === album.id) { // 自分自身の上はドロップ不可
      e.dataTransfer.dropEffect = 'none';
      return;
    }
    e.dataTransfer.dropEffect = 'move';
  };

  const handleNodeDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const currentDraggedAlbumId = e.dataTransfer.types.includes('application/album-id')
      ? e.dataTransfer.getData('application/album-id')
      : null;
    const currentDraggedPhotoId = e.dataTransfer.types.includes('application/photo-id');

    // 自分自身へのドロップや、ドラッグされていない場合は何もしない
    if (currentDraggedAlbumId === album.id || (!currentDraggedAlbumId && !currentDraggedPhotoId)) {
        return;
    }
    
    if (onDragEnter) { // AppSidebar から渡された onDragEnter を呼び出す
      onDragEnter(album.id);
    }
  };

  const handleNodeDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX >= rect.right || e.clientY < rect.top || e.clientY >= rect.bottom) {
        if (onDragLeave) { // AppSidebar から渡された onDragLeave を呼び出す
            onDragLeave();
        }
    }
  };
  
  const handleNodeDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedAlbumId = e.dataTransfer.getData('application/album-id');
    if (droppedAlbumId === album.id) return; // 自分自身へのドロップは無視
    
    if (droppedAlbumId && onMoveAlbum) {
      onMoveAlbum(droppedAlbumId, album.id);
    }

    const droppedPhotoId = e.dataTransfer.getData('application/photo-id');
    const droppedPhotoName = e.dataTransfer.getData('application/photo-name');
    if (droppedPhotoId && onMovePhoto) {
      if (confirm(`"${droppedPhotoName}" を "${album.name}" アルバムに移動しますか？`)) {
        onMovePhoto(droppedPhotoId, album.id);
      }
    }
    // ドロップ後、AppSidebar側のdropTargetIdをクリアするためにonDragLeaveを呼ぶか、
    // onDragEndでdropTargetIdをクリアするならそれでも良い
    if (onDragLeave) onDragLeave(); 
  };

  // スタイルクラスの決定
  const getDynamicItemClassName = () => {
    let classes = "flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground";
    if (amISelected) {
      classes += " bg-accent text-accent-foreground font-semibold"; // 例: 選択時のスタイル
    }
    if (amIDropTarget) {
      classes += " bg-blue-100 dark:bg-blue-900/30 ring-2 ring-blue-300"; //例: ドロップターゲットのスタイル
    }
    // isDragging は SidebarMenuItem の親 div に適用した方が良いかもしれない
    // ここでは SidebarMenuButton に適用
    if (amIDragging) {
        // classes += " opacity-40"; // ドラッグ中のスタイル (SidebarMenuButton自体に適用する場合)
    }
    return classes;
  };
  
  // SidebarMenuItem の親 div (一番外側のdiv) にドラッグ中のスタイルを適用
  const outerDivClassName = `w-full transition-all duration-200 ${
    amIDragging ? 'opacity-40 scale-95' : ''
  }`;




  return (
    <div className={outerDivClassName}>
      <SidebarMenuItem>
        <ContextMenu>
          <ContextMenuTrigger>
            <SidebarMenuButton
              onClick={() => onSelectAlbum(album.id)} 
              className={getDynamicItemClassName()}
              style={{ paddingLeft: `${(level * 16) + 8}px` }}
              draggable={canAdmin || !isSharedAlbum} // 共有アルバムで権限がない場合
              onDragStart={handleNodeDragStart}
              onDragEnd={handleNodeDragEnd}
              onDragOver={handleNodeDragOver}
              onDragEnter={handleNodeDragEnter}
              onDragLeave={handleNodeDragLeave}
              onDrop={handleNodeDrop}
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
              {isRenaming ? (
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onBlur={handleConfirmRename}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border border-primary rounded px-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <span>{album.name}</span>
              )}
            </SidebarMenuButton>
          </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          {canWrite && (
            <>
              <ContextMenuItem onClick={handleAddAlbum}>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>アルバム追加</span>
              </ContextMenuItem>
              <ContextMenuItem onClick={handleAddPhoto}>
                <Image className="mr-2 h-4 w-4" />
                <span>写真追加</span>
              </ContextMenuItem>
            </>
          )}
          {canAdmin && (
            <>
            <ContextMenuItem onClick={handleShareAlbum}>
              <Share className="mr-2 h-4 w-4" />
              <span>アルバム共有</span>
            </ContextMenuItem>
            </>
          )}
          {(canWrite || canAdmin) && <ContextMenuSeparator />}
          {canAdmin && (
            <>
              <ContextMenuItem onClick={handleRenameAlbum}>
                <Pencil className="mr-2 h-4 w-4" />
                <span>アルバム名変更</span>
              </ContextMenuItem>
              <ContextMenuItem onClick={handleDeleteAlbum} className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                <span>アルバム削除</span>
              </ContextMenuItem>
            </>
          )}
          {/* 読み取り専用ユーザーには何も表示しない、または閲覧専用メニューを表示 */}
          {!canWrite && !canAdmin && (
            <ContextMenuItem disabled>
              <Eye className="mr-2 h-4 w-4" />
              <span>閲覧専用</span>
            </ContextMenuItem>
          )}
        </ContextMenuContent>
        </ContextMenu>
      </SidebarMenuItem>
      
      {isExpanded && hasChildren && (
        <div className="w-full">
          {album.children?.map((child) => (
            <AlbumTreeNode 
              key={child.id} 
              album={child} 
              level={level + 1}
              selectedAlbumId={selectedAlbumId}
              draggedAlbumId={draggedAlbumId} 
              dropTargetId={dropTargetId} 
              onSelectAlbum={onSelectAlbum}
              onAddAlbum={onAddAlbum}
              onAddPhoto={onAddPhoto}
              onRenameAlbum={onRenameAlbum}
              onDeleteAlbum={onDeleteAlbum}
              onShareAlbum={onShareAlbum}
              onMoveAlbum={onMoveAlbum}
              onMovePhoto={onMovePhoto}
              onDragStart={onDragStart} 
              onDragEnd={onDragEnd} 
              onDragEnter={onDragEnter} 
              onDragLeave={onDragLeave} 
              isSharedAlbum={isSharedAlbum}                   
              userPermission={child.userPermission || userPermission} 
            />
          ))}
        </div>
      )}
    </div>
  );
};