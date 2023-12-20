import React from 'react';
import { Button } from '@mui/material';
import styled from '@mui/material/styles/styled';
import AdminLayout from './AdminLayout';
import { Link } from 'react-router-dom';


export interface Props {
  title: string;

  addRoute?: string;
  addRouteTitle?: string;
  customHeader?: React.ReactNode;
  isAdminOnlyAction?: boolean;
}

const StyledButton = styled(Button)({
  background: '#00b51d',
});

export default function AdminTableLayout({
  title,
  addRoute,
  addRouteTitle,
  customHeader,
  children,
}: React.PropsWithChildren<Props>) {

  return (
    <AdminLayout title={title}>
      <div className="p-6 ">
        {customHeader ? (
          customHeader
        ) : (
          <div className="flex justify-between">
            <div className="mt-8 text-2xl">{title}</div>
            {addRoute && (
              <div className="">
                {addRoute ? (
                  <Link to={addRoute}>
                    <StyledButton variant="contained" size="large">
                      {addRouteTitle ?? `Tambah ${title}`}
                    </StyledButton>
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </AdminLayout>
  );
}
