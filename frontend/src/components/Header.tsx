// components/Header.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, PlusCircle, Image, Sparkles, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

type HeaderProps = {
  onSearch: (keyword: string, isVectorSearch: boolean) => void;
  onAddAlbum: () => void;
  onAddPhoto: () => void;
  sortBy: 'name' | 'date' | 'similarity';
  sortOrder: 'asc' | 'desc';
  onSort: (sortBy: 'name' | 'date' | 'similarity', sortOrder: 'asc' | 'desc') => void;
  showSimilaritySort?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  onSearch, 
  onAddAlbum, 
  onAddPhoto, 
  sortBy, 
  sortOrder, 
  onSort, 
  showSimilaritySort = false 
}) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isVectorSearch, setIsVectorSearch] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchKeyword(value);
    onSearch(value, isVectorSearch);
  };

  const handleSearchModeChange = (checked: boolean) => {
    setIsVectorSearch(checked);
    if (searchKeyword) {
      onSearch(searchKeyword, checked);
    }
  };

  const handleSortChange = (newSortBy: 'name' | 'date' | 'similarity') => {
    if (sortBy === newSortBy) {
      // 同じソート項目の場合、順序を反転
      onSort(newSortBy, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // 異なるソート項目の場合、適切なデフォルト順序を設定
      const defaultOrder = newSortBy === 'name' ? 'asc' : 'desc';
      onSort(newSortBy, defaultOrder);
    }
  };

  const getSortLabel = () => {
    const sortLabels = {
      name: '名前',
      date: '更新日時',
      similarity: '類似度'
    };
    
    const orderIcon = sortOrder === 'asc' ? 
      <ArrowUp className="h-3 w-3 ml-1" /> : 
      <ArrowDown className="h-3 w-3 ml-1" />;
    
    return (
      <div className="flex items-center">
        <span>{sortLabels[sortBy]}</span>
        {orderIcon}
      </div>
    );
  };

  return (
    <header className="w-full bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4 flex-1 max-w-3xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder={isVectorSearch ? "AIで画像を検索..." : "写真名で検索..."}
            className="pl-10 pr-4"
            value={searchKeyword}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
          <Label htmlFor="search-mode" className="text-sm font-medium text-gray-700">
            {isVectorSearch ? (
              <div className="flex items-center space-x-1">
                <Sparkles className="h-4 w-4 text-purple-500" />
                <span>AI検索</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <Search className="h-4 w-4 text-gray-500" />
                <span>通常検索</span>
              </div>
            )}
          </Label>
          <Switch
            id="search-mode"
            checked={isVectorSearch}
            onCheckedChange={handleSearchModeChange}
          />
        </div>

        {/* ソート機能 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <ArrowUpDown className="h-4 w-4" />
              <span className="hidden sm:inline">並び替え:</span>
              {getSortLabel()}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem 
              onClick={() => handleSortChange('name')}
              className={sortBy === 'name' ? 'bg-blue-50' : ''}
            >
              <div className="flex items-center justify-between w-full">
                <span>名前</span>
                {sortBy === 'name' && (
                  sortOrder === 'asc' ? 
                    <ArrowUp className="h-3 w-3" /> : 
                    <ArrowDown className="h-3 w-3" />
                )}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => handleSortChange('date')}
              className={sortBy === 'date' ? 'bg-blue-50' : ''}
            >
              <div className="flex items-center justify-between w-full">
                <span>更新日時</span>
                {sortBy === 'date' && (
                  sortOrder === 'asc' ? 
                    <ArrowUp className="h-3 w-3" /> : 
                    <ArrowDown className="h-3 w-3" />
                )}
              </div>
            </DropdownMenuItem>
            {showSimilaritySort && (
              <DropdownMenuItem 
                onClick={() => handleSortChange('similarity')}
                className={sortBy === 'similarity' ? 'bg-blue-50' : ''}
              >
                <div className="flex items-center justify-between w-full">
                  <span>類似度</span>
                  {sortBy === 'similarity' && (
                    sortOrder === 'asc' ? 
                      <ArrowUp className="h-3 w-3" /> : 
                      <ArrowDown className="h-3 w-3" />
                  )}
                </div>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button 
          variant="outline" 
          size="sm"
          onClick={onAddAlbum}
          className="flex items-center space-x-2"
        >
          <PlusCircle className="h-4 w-4" />
          <span className="hidden sm:inline">アルバム作成</span>
        </Button>
        
        <Button 
          size="sm"
          onClick={onAddPhoto}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
        >
          <Image className="h-4 w-4" />
          <span className="hidden sm:inline">写真追加</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;