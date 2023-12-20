import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
  color?:
    | 'primary'
    | 'inherit'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  isNextPage?: boolean;
}

export default function MuiInertiaLinkButton({
  href,
  children,
  color,
}: Props) {
  return (
    <Button
      type="button"
      variant="contained"
      size="large"
      color={color ?? 'primary'}
      LinkComponent={Link}
      href={href}
      sx={{ marginY: 'auto' }}
    >
      {children}
    </Button>
  );
}
