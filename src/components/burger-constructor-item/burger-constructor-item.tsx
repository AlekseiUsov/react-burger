import styles from './burger-constructor-item.module.css';

import { useRef, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import { SORT_INGRIDIENT } from '../../services/actions/burger-constructor';

interface IBurgerConstructorItem {
    children: Array<React.ReactElement>;
    index: Number;
}


const BurgerConstructorItem: FC<IBurgerConstructorItem> = ({ children, index }) => {
    const dispatch = useDispatch();

    const ref = useRef<HTMLDivElement>(null);

    const [{ handlerId }, drop] = useDrop({
        accept: 'innerIngridient',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            };
        },
        hover(item: any, monitor) {
            if (!ref.current) {
                return;
            }
            // Индекс перемещаемого элемента
            const dragIndex = item.index;
            // Индекс текущего элемента (над которым находится курсор при dnd)
            const hoverIndex = index;

            // Выходим, если индексы сопадают
            if (dragIndex === hoverIndex) {
                return;
            }

            // Получаем положение текущего элемента относительно экрана
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Получаем центр текущего элемента по вертикали
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Получаем положение курсора
            const clientOffset: any = monitor.getClientOffset();
            // Получаем положение курсора относительно текущего элемента
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            // Выходим, если перемещаемый элемент ниже, чем 50% от высоты текущего
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            // Выходим, если перемещаемый элемент выше, чем 50% от высоты текущего
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch({ type: SORT_INGRIDIENT, rest: { from: dragIndex, to: hoverIndex } });

            // Сразу меняем индекс перемещаемого элемента
            item.index = hoverIndex;
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'innerIngridient',
        item: () => {
            // Определяем элемент
            return { index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <div ref={ref} data-handler-id={handlerId} className={`${styles.item}`}>
            {children}
        </div>
    )
}


export default BurgerConstructorItem;