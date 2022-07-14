import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
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
