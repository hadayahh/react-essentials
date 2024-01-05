export default function TabButton({children, onSelect, isSelected}){
    return (
        <li><button className = {isSelected=isSelected? 'active': undefined} onClick={onSelect}>{children}</button></li>
    )
}