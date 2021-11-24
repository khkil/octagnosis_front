import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import Helmet from "react-helmet";
import { withStyles } from '@material-ui/core/styles';
import {
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Grid,
  Paper as MuiPaper,
 
} from "@material-ui/core";

import { green, orange } from "@material-ui/core/colors";

import {
  Add as AddIcon,
  Archive as ArchiveIcon,
  FilterList as FilterListIcon,
  RemoveRedEye as RemoveRedEyeIcon,
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";
import { useDispatch, useSelector } from "react-redux";
import MenuBar from "../../../components/MenuBar";
const Divider = styled(MuiDivider)(spacing);


const Paper = styled(MuiPaper)(spacing);



const SkeletonPage = ({ match }) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  
  return (
    <React.Fragment>
      <Helmet title="회원 목록" />

      <Grid justify="space-between" container spacing={10}>
        <MenuBar match={match}/>
        <Grid item>
          <Button variant="contained" color="primary">
            <AddIcon />
            New Order
          </Button>
        </Grid>
      </Grid>
      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper>
       
          </Paper>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SkeletonPage;
