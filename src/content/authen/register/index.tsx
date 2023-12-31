import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormValue, defaultValues, registerSchema } from './registerSchema';
import { Box, Divider, Stack, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { User } from 'src/api/auth';

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValue, IFormValue>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(registerSchema) as any
  });

  const Register = async (email, password, phone) => {
    const response = User.Register(email, password, phone);
  };
  const handleSubmission = (data: IFormValue) => {
    console.log(data);
    Register(data.email, data.password, data.phone);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmission)}>
      <Stack sx={{ gap: '20px', maxWidth: '400px', margin: 'auto' }}>
        <Stack
          sx={{
            gap: '10px'
          }}
        >
          <Typography>Email</Typography>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="Nhập email"
                error={!!errors.email}
                helperText={errors.email?.message || ''}
              />
            )}
          />
        </Stack>
        <Stack
          sx={{
            gap: '10px'
          }}
        >
          <Typography>Mật Khẩu </Typography>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="Nhập mật khẩu"
                error={!!errors.password}
                helperText={errors.password?.message || ''}
              />
            )}
          />
        </Stack>

        <Stack
          sx={{
            gap: '10px'
          }}
        >
          <Typography>Nhập lại mật Khẩu </Typography>
          <Controller
            control={control}
            name="confirm_password"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="Nhập lại mật khẩu"
                error={!!errors.confirm_password}
                helperText={errors.confirm_password?.message || ''}
              />
            )}
          />
        </Stack>

        <Stack
          sx={{
            gap: '10px'
          }}
        >
          <Typography>Số điện thoại</Typography>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="Nhập số điện thoại"
                error={!!errors.phone}
                helperText={errors.phone?.message || ''}
              />
            )}
          />
        </Stack>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            padding: '10px',
            marginTop: '5px'
          }}
        >
          Đăng Ký
        </Button>
      </Stack>
      <Box
        sx={{
          margin: '20px 0px'
        }}
      >
        <Divider>Hoặc</Divider>
        <Stack direction="row" spacing={2} marginTop={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<FacebookOutlinedIcon />}
            sx={{
              backgroundColor: '#314D69'
            }}
          >
            Đăng ký bằng Facebook
          </Button>
          <Button
            variant="contained"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              backgroundColor: '#D75144'
            }}
          >
            Đăng ký bằng Google
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default RegisterForm;
