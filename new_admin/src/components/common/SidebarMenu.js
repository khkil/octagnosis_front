import React, { useState, useMemo, useEffect } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, ListSubheader, Divider } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SidebarMenu = ({ header, name, path, children, icon }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const isInspectionMenus = useMemo(() => path.indexOf('inspection') > -1);
  const isActived = useMemo(() => pathname.indexOf(path) > -1, [pathname]);
  const hasChildren = useMemo(() => children && children.filter(({ path }) => path.indexOf(':') === -1).length > 0);

  const [open, setOpen] = useState(isActived);

  const handleClick = () => {
    if (!hasChildren) {
      goPage(path);
    }
    setOpen(!open);
  };

  const goPage = path => {
    history.push(path);
  };

  const inspectionList = useSelector(({ inspection }) => inspection.list);

  return (
    <List component="div" disablePadding>
      {header && (
        <ListSubheader component="div" id="nested-list-subheader" style={{ background: '#405064', color: '#c7c7c7' }}>
          {header}
        </ListSubheader>
      )}
      {isInspectionMenus ? (
        inspectionList.map(({ inspectionIdx, inspectionName }) => (
          <ListItemButton
            key={inspectionIdx}
            onClick={() => {
              goPage(`${path}/${inspectionIdx}`);
            }}
            style={{ background: '#344152' }}
          >
            <ListItemIcon>{icon}</ListItemIcon>

            <ListItemText primary={inspectionName} />
            {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        ))
      ) : (
        <ListItemButton onClick={handleClick} style={{ background: '#344152' }}>
          <ListItemIcon>{icon}</ListItemIcon>

          <ListItemText primary={name} />
          {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      )}

      <Collapse in={open} timeout="auto" unmountOnExit>
        {hasChildren &&
          children.map(
            (child, index) =>
              child.path.indexOf(':') === -1 && (
                <ListItemButton
                  key={index}
                  sx={{ pl: 4 }}
                  onClick={() => {
                    goPage(path + child.path);
                  }}
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={child.name} />
                </ListItemButton>
              ),
          )}
      </Collapse>
      <Divider />
    </List>
  );
};

export default SidebarMenu;
