import * as React from "react";
import {
  Divider,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { ContentCut, ContentCopy, ContentPaste } from "@mui/icons-material";
import Cloud from "@mui/icons-material/Cloud";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Paper sx={{ width: 300, maxWidth: "100%", height: 180 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize='small' />
          </ListItemIcon>
          <Link href='/'>Home</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize='small' />
          </ListItemIcon>
          <Link href='/about'>About</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize='small' />
          </ListItemIcon>
          <Link href='/links/new'>Create new Link</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize='small' />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
