import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider
} from 'react95'
import Image from 'next/image'
import oldMSLogo from '../../global/assets/oldMSLogo.png'
const OldSchoolRenderer = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar className="font-mono">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <Image src={oldMSLogo} alt="react95 logo" width="18" height="18" />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '100%'
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>Resume</ListItem>
              <ListItem>Linkedin</ListItem>
              <Divider />
            </List>
          )}
        </div>

        <TextField placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  )
}

export default OldSchoolRenderer
