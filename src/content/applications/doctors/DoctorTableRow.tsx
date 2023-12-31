import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { format } from 'date-fns';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useNavigate } from 'react-router-dom';
import { IDoctor } from 'src/interface/doctor';
import dayjs from 'dayjs';

interface Props {
  data: IDoctor[];
}

const DoctorTableRow = ({ data = [] }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const onNavigationToDetails = (event, id: string) => {
    event.stopPropagation();
    navigate(`/admin/bac-si/cap-nhat/${id}`);
  };
  return (
    <TableBody>
      {data.map((item) => {
        return (
          <TableRow
            hover
            key={item.id}
            sx={{
              cursor: 'pointer'
            }}
          >
            <TableCell>
              <Typography gutterBottom noWrap>
                {item.id}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom noWrap>
                {item.name}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" noWrap>
                {dayjs(item.date).format('DD/MM/YYYY')}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom noWrap>
                00000
              </Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom noWrap>
                @GMAIL.COM
              </Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom noWrap>
                10
              </Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom noWrap>
                doctor
              </Typography>
            </TableCell>

            <TableCell>{item.degree || '____'}</TableCell>
            <TableCell align="right">
              <Tooltip title="Sửa" arrow>
                <IconButton
                  sx={{
                    '&:hover': {
                      background: theme.colors.primary.lighter
                    },
                    color: theme.palette.primary.main
                  }}
                  color="inherit"
                  size="small"
                  onClick={(e) => onNavigationToDetails(e, item.id)}
                >
                  <EditTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Xoá" arrow>
                <IconButton
                  sx={{
                    '&:hover': { background: theme.colors.error.lighter },
                    color: theme.palette.error.main
                  }}
                  color="inherit"
                  size="small"
                >
                  <DeleteTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default DoctorTableRow;
