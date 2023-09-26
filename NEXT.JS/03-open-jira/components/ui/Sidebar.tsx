import { useContext } from 'react'
import { UIContext } from '@/context/ui';
import { InboxOutlined, MailOutline } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

const menuItems: string[] = ['Inbox','Starred','Send','Email','Drafts'];

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer
        anchor='left'
        open={ sideMenuOpen }
        onClose={ closeSideMenu }
    >
        <Box sx={{ width: 250}}>
            <Box sx={{ padding: '5px 10px'}}>
                <Typography variant='h4'>Menú</Typography>
            </Box>

            <List>
                {
                    menuItems.map((text, index) =>(
                        <ListItemButton key={ text }>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlined/> : <MailOutline/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    ))
                }
            </List>
            <Divider/>
            <List>
                {
                    menuItems.map((text, index) =>(
                        <ListItem key={text}>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlined/> : <MailOutline/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    </Drawer>
  )
}