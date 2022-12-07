import * as React from 'react';
import { useTheme } from '@mui/material';
import { SvgIcon, SvgIconProps } from '@mineral/core';

export const BroadcomLogo: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  const textFill = theme.palette.mode === 'dark' ? '#fff' : '#000';

  return (
    <SvgIcon viewBox="0 0 240 33" titleAccess="Broadcom" {...props}>
      <path
        fill={textFill}
        d="M237.32 9.09a1.93 1.93 0 01-1.93-1.92c0-1.06.87-1.93 1.93-1.93s1.93.87 1.93 1.93-.87 1.92-1.93 1.92m0-4.32c-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4 1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4"
      />
      <path
        fill={textFill}
        d="M237.48 7.07l-.51.01-.01-.62h.51c.19-.01.34.11.34.3.01.19-.14.31-.33.31m.83-.32c-.01-.42-.3-.72-.77-.72l-1.07.02.03 2.26h.49l-.01-.81h.35l.46.8.55-.01-.52-.86c.24-.06.49-.28.49-.68M51.834 23.18h-5.999V9.347h5.835c1.574 0 2.557 1.016 2.557 2.393 0 1.376-.983 2.36-2.557 2.36H45v4h6.834c1.836 0 2.82 1.18 2.82 2.555 0 1.574-1.05 2.525-2.82 2.525m3.376-7.245c2.066-.426 3.771-2.262 3.771-5.015 0-2.918-2.13-5.573-6.295-5.573H41.18v21.865h11.867c4.163 0 6.36-2.623 6.36-5.9 0-2.755-1.869-5.016-4.197-5.377M73.033 15.345H68v4.098h3.558l4.294 7.77h5.343l-4.917-8.328c2.36-.557 4.786-2.622 4.786-6.49m0 0c0-4.065-2.786-7.048-7.343-7.048H63.493v21.865h4.655V9.445h4.885c1.869 0 3.278 1.114 3.278 2.95s-1.41 2.95-3.278 2.95M116.453 19.41l3.41-9.408 3.41 9.408zm.492-14.063l-8.458 21.865h5.31l1.377-3.704h9.376l1.344 3.704h5.311L122.78 5.348zM143.85 23.115h-3.968V9.445h3.967c4.491 0 6.851 2.983 6.851 6.852 0 3.704-2.524 6.818-6.85 6.818m0-17.767h-8.623v21.865h8.622c6.851 0 11.604-4.327 11.604-10.916 0-6.59-4.753-10.95-11.604-10.95M225.976 5.343l-5.734 9.27-5.734-9.27h-5.146v21.87h4.656V12.918l5.012 7.622a1.451 1.451 0 002.424 0l5.013-7.622v14.293h4.656V5.343zM95.825 23.344a7.008 7.008 0 01-7.008-7.008 7.008 7.008 0 117.008 7.008m0-18.536c-6.367 0-11.528 5.161-11.528 11.528 0 6.366 5.161 11.527 11.528 11.527 6.366 0 11.528-5.16 11.528-11.527 0-6.367-5.162-11.528-11.528-11.528M176.404 19.727a7.009 7.009 0 11-6.132-10.399 7.001 7.001 0 016.1 3.565l3.27-3.27a11.51 11.51 0 00-9.37-4.815c-6.367 0-11.527 5.16-11.527 11.528 0 6.366 5.16 11.528 11.527 11.528 3.883 0 7.316-1.922 9.404-4.865zM194.543 23.344a7.008 7.008 0 01-7.008-7.008 7.008 7.008 0 117.008 7.008m0-18.536c-6.367 0-11.528 5.161-11.528 11.528 0 6.366 5.162 11.527 11.529 11.527 6.365 0 11.527-5.16 11.527-11.527 0-6.367-5.162-11.528-11.528-11.528"
      />
      <ellipse cx="16.52" cy="16.497" fill="#cc092f" rx="16.236" ry="16.235" />
      <path
        fill="#fff"
        d="M30.825 20.883c-1.857-.74-3.557-.492-5.26.541 0 0-.622.38-.808.496-.794.498-1.543.97-2.263.97-.687 0-1.363-.184-1.649-1.513-.446-2.073-1.534-7.167-2.009-9.69-.279-1.483-.432-2.282-.59-2.825-.28-.954-.793-1.473-1.52-1.556 0 0-.114-.016-.207-.016-.092 0-.218.018-.218.018-.72.086-1.229.605-1.507 1.554-.159.543-.312 1.342-.59 2.825-.476 2.523-1.564 7.617-2.01 9.69-.286 1.33-.962 1.513-1.649 1.513-.72 0-1.469-.472-2.263-.97a120.83 120.83 0 00-.808-.496c-1.703-1.033-3.404-1.28-5.26-.54-.4.16-.796.338-1.172.52.257.805.577 1.599.95 2.344.411-.202.842-.403 1.282-.533.634-.187 1.284-.197 1.914.014.612.205 1.157.568 1.7.91 1.023.642 2.182 1.371 3.657 1.371 2.186 0 3.72-1.305 4.21-3.58.38-1.765 1.222-5.703 1.763-8.419 0 0 1.386 6.654 1.765 8.418.49 2.276 2.025 3.581 4.211 3.581 1.475 0 2.634-.729 3.657-1.372.543-.34 1.088-.704 1.7-.909.63-.21 1.28-.2 1.914-.014.44.13.87.33 1.282.533.374-.745.693-1.539.95-2.345a18.67 18.67 0 00-1.172-.52"
      />
    </SvgIcon>
  );
};