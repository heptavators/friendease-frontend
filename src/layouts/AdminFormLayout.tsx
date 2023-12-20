import React from 'react';
import AdminLayout from './AdminLayout';
import MuiLinkButton from 'components/MuiLinkButton';

export interface Props {
  title: string;

  backRoute?: string;
  backRouteTitle?: string;
}

export default function AdminFormLayout(props: React.PropsWithChildren<Props>) {
  const { backRoute, backRouteTitle, title } = props;
  return (
    <AdminLayout title={title}>
      <div className="flex justify-between mx-12">
        <div className="text-2xl">{title}</div>
        {backRoute ? (
          <MuiLinkButton color="primary" href={backRoute}>
            {backRouteTitle ?? 'Kembali'}
          </MuiLinkButton>
        ) : null}
      </div>
      <div className="m-12 p-7 text-gray-800 shadow-2xl sm:rounded-3xl bg-white shadow-sky-400/50">
        {props.children}
      </div>
    </AdminLayout>
  );
}
