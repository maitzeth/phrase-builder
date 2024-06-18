import { PropsWithChildren, ReactNode, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import style from './style.module.css';

type ActionParams = {
  isOpen: boolean;
  handleOpen: (val: boolean) => void;
};

interface Props extends PropsWithChildren {
  trigger: ({ handleOpen }: ActionParams) => ReactNode;
  render: ({ handleOpen, isOpen }: ActionParams) => ReactNode;
}

export const Modal = ({ render, trigger }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = (val: boolean) => {
    setOpen(val);
  }

  return (
    <>
      {trigger({ handleOpen, isOpen })}
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Content>
            <div className={style.content}>
              {render({ handleOpen, isOpen })}
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => setOpen(false)} />
      </Sheet>
    </>
  );
};
