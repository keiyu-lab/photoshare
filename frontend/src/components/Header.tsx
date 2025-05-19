type HeaderProps = {
  onSearch: (keyword: string) => void;
  onAddAlbum: () => void;
  onAddPhoto: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onAddAlbum, onAddPhoto }) => {
  return (
    <header className="w-full bg-white border-b px-4 py-2 flex items-center justify-between">
      <input
        type="text"
        placeholder="検索..."
        className="border px-2 py-1 rounded w-1/3"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => onAddAlbum()}>
          アルバム追加
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => onAddPhoto()}>
          写真追加
        </button>
      </div>
    </header>
  );
};

export default Header;