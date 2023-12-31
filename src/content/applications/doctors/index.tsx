import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, Card } from '@mui/material';
import PageHeader from 'src/components/PageHeader';
import DoctorTable from './DoctorTable';

function DoctorComponent() {
  return (
    <>
      <Helmet>
        <title>Trang bác sĩ</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader title={'Bác sĩ'} textButton={''} />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <DoctorTable />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DoctorComponent;
