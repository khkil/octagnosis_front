import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Alert, Box, Button, Grid, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import FindAddressPopup from '../common/FindAddressPopup';
import { Save, Search } from '@mui/icons-material';

const GroupForm = ({ initialValues, onSubmit }) => {
  const [openAddressPopup, setOpenAddressPopup] = useState(false);
  return (
    <Formik
      initialValues={
        initialValues
          ? initialValues
          : {
              name: '',
              tel: '',
              address: '',
              addressSub: '',
              contactName: '',
              contactEmail: '',
              contactTel: '',
            }
      }
      validationSchema={Yup.object().shape({
        name: Yup.string().required('단체명을 입력하세요'),
        /* 
        tel: Yup.string().required('연락처를 입력하세요'),
        address: Yup.string().required('주소를 입력하세요'),
        addressSub: Yup.string().required('상세주소를 입력하세요'),
        contactName: Yup.string().required('담당자명을 입력하세요'),
        contactEmail: Yup.string().required('담당자 이메일을 입력하세요'),
        contactTel: Yup.string().required('담당자 연락처를 입력하세요'), */
      })}
      onSubmit={data => {
        onSubmit(data);
      }}
    >
      {({ values, setValues, handleChange, handleSubmit, touched, errors }) => (
        <Box component="form" onSubmit={handleSubmit} p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Alert severity="info">기본정보</Alert>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="name"
                label="단체명"
                type="text"
                value={values.name}
                onChange={handleChange}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="tel"
                label="연락처"
                type="text"
                value={values.tel}
                onChange={handleChange}
                error={Boolean(touched.tel && errors.tel)}
                helperText={touched.tel && errors.tel}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                name="address"
                label="주소"
                type="text"
                value={values.address}
                onChange={handleChange}
                onClick={setOpenAddressPopup}
                error={Boolean(touched.address && errors.address)}
                helperText={touched.address && errors.address}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" color="primary">
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FindAddressPopup
                open={openAddressPopup}
                setOpen={setOpenAddressPopup}
                onComplete={({ address }) => {
                  setValues({
                    ...values,
                    address: address,
                  });
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="addressSub"
                label="상세주소"
                type="text"
                value={values.addressSub}
                onChange={handleChange}
                error={Boolean(touched.addressSub && errors.addressSub)}
                helperText={touched.addressSub && errors.addressSub}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="contactName"
                label="담당자명"
                type="text"
                value={values.contactName}
                onChange={handleChange}
                error={Boolean(touched.contactName && errors.contactName)}
                helperText={touched.contactName && errors.contactName}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                name="contactTel"
                label="담당자 연락처"
                type="text"
                value={values.contactTel}
                onChange={handleChange}
                error={Boolean(touched.contactTel && errors.contactTel)}
                helperText={touched.contactTel && errors.contactTel}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="contactEmail"
                label="담당자 이메일"
                type="text"
                value={values.contactEmail}
                onChange={handleChange}
                error={Boolean(touched.contactEmail && errors.contactEmail)}
                helperText={touched.contactEmail && errors.contactEmail}
              />
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button type="submit" variant="contained" size="large" startIcon={<Save />}>
                저장하기
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Formik>
  );
};
export default GroupForm;
