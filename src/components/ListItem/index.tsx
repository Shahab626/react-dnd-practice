import { useDrag } from "react-dnd";
import { Item } from "./index.styled";
import { FC } from "react";

interface IListItem {
  item: { id: number; name: string };
  type: string;
  // index: number;
  OnDropItem: any;
}

export const ListItem: FC<IListItem> = ({ item, type, OnDropItem }) => {
  const [{ isDraggable }, dragRef] = useDrag({
    type: type,
    item: () => ({ ...item }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult && item) {
        OnDropItem(item);
      }
    },
    collect: (monitor) => ({ isDraggable: monitor.isDragging() }),
  });

  return (
    <Item $isDraggable={isDraggable} $type={type} ref={dragRef}>
      {item.name}
    </Item>
  );
};
