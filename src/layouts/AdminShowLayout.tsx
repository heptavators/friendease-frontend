import { Button } from '@mui/material';
import React from 'react';
import { useConfirm } from 'material-ui-confirm';
import MuiLinkButton from 'components/MuiLinkButton';
import AdminLayout from './AdminLayout';

interface Props {
  title: string;
  headerTitle: string;

  backRoute?: string;
  backRouteTitle?: string;

  editRoute?: string;
  editRouteTitle?: string;

  onDelete?: () => any;
  deleteTitle?: string;
  onDeleteMessage?: string;
  isRestore?: boolean;
  isAdminOnlyAction?: boolean;
}

export default function Index(props: React.PropsWithChildren<Props>) {
  const confirm = useConfirm();
  const {
    title,
    headerTitle,
    backRoute,
    backRouteTitle,
    editRoute,
    editRouteTitle,
    onDelete,
    deleteTitle,
    onDeleteMessage,
    isRestore,
  } = props;

  const handleDelete = () => {
    confirm({
      description:
        onDeleteMessage || `Ini akan menghapus ${headerTitle} selamanya.`,
      confirmationButtonProps: { autoFocus: true },
    })
      .then(onDelete)
      .catch(e => console.log(e, 'Deletion cancelled.'));
  };

  return (
    <AdminLayout title={title}>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between mx-8">
          <div className="mt-8 text-2xl">{headerTitle}</div>

          <div className="flex flex-col md:flex-row gap-3">
            {backRoute ? (
              <MuiLinkButton color="primary" href={backRoute}>
                {backRouteTitle ?? 'Kembali'}
              </MuiLinkButton>
            ) : null}
            {editRoute ? (
              <MuiLinkButton color="warning" href={editRoute}>
                {editRouteTitle ?? 'Edit'}
              </MuiLinkButton>
            ) : null}
            {onDelete ? (
              <div className="flex flex-col justify-center">
                <Button
                  variant="contained"
                  color={isRestore ? 'success' : 'error'}
                  onClick={handleDelete}
                  size="large"
                >
                  <label htmlFor="my-modal">{deleteTitle ?? 'Hapus'}</label>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
        {props.children}
      </div>
    </AdminLayout>
  );
}
