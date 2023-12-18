import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormValue, defaultValues, categorySchema } from './schema';
import { Grid, Stack, Typography, styled } from '@mui/material';

const LableInput = styled(Typography)(
  () => `
  margin-bottom: 10px;
`
);

const UpdateDoctorComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValue, IFormValue>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(categorySchema) as any
  });

  const handleSubmission = (data: IFormValue) => {
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmission)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LableInput>Họ và tên</LableInput>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="Nhập tên bác sĩ"
                error={!!errors.name}
                helperText={errors.name?.message || ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <LableInput>Bằng cấp</LableInput>
          <Controller
            control={control}
            name="degree"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                multiline
                rows={5}
                maxRows={8}
                placeholder="Nhập thông tin bằng cấp"
                error={!!errors.degree}
                helperText={errors.degree?.message || ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <LableInput>Hình ảnh</LableInput>
          <Stack spacing={1} direction={'row'}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                maxWidth: 130
              }}
              size="small"
            >
              Chọn ảnh
              <input type="file" hidden />
            </Button>
            <img
              src="https://bocity.vn/thumbs/540x540x1/upload/product/anh-chup-man-hinh-2022-08-18-luc-004214-8790.png"
              style={{
                maxHeight: 130,
                maxWidth: 130
              }}
            />
          </Stack>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            maxWidth: '60%',
            margin: 'auto',
            padding: '10px',
            marginTop: 3
          }}
        >
          Lưu thông tin
        </Button>
      </Grid>
    </form>
  );
};

export default UpdateDoctorComponent;