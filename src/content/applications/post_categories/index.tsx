import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { IPostCategoriesProps } from 'src/content/pages/post_categories';

interface IProps {
  handleSetisEdit: (id: string) => void;
  handleRemove: (id: string) => void;
  data: IPostCategoriesProps[];
}

const PostCategoriesComponent = ({
  handleSetisEdit,
  handleRemove,
  data = []
}: IProps) => {
  return (
    <Box
      sx={{
        padding: 2
      }}
    >
      <Grid container spacing={4}>
        {data.map((item: IPostCategoriesProps, key) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={key}>
            <Card
              sx={{
                maxHeight: 130
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <Button
                  size="small"
                  startIcon={<ModeEditOutlineOutlinedIcon />}
                  onClick={() => handleSetisEdit(item.id)}
                >
                  Sửa
                </Button>
                <Button
                  size="small"
                  startIcon={<DeleteOutlineOutlinedIcon />}
                  sx={{
                    color: 'red'
                  }}
                  onClick={() => handleRemove(item.id)}
                >
                  Xoá
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostCategoriesComponent;