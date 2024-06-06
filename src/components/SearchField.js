export default function SearchField({text, onSearch}) {
    return (
        <div>
        <input type='text' value={text} onChange={onSearch} placeholder='Enter search text' />
        <input type='button' value="Search" />
      </div>
        );
}