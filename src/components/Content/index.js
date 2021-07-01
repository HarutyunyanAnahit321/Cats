import { idGenerator } from '../../utils/idGenerator';
import Row from '../responsiveUI/Row';
import Column from '../responsiveUI/Column';
import Container from '../responsiveUI/Container'
import { Button, BtnWrapper } from './styled';

function Content({ images, getMoreImages }) {
  return (
    <Container className="fluid"> 
      <Row className="justify-content-around align-items-center "> 
        {images.images.map(item => {
            return (
              <Column className="lg-3 md-4 sm-12 xs-12 ">
                <img key={idGenerator()} alt={item.id} src={item.url} width="200vw" height="200vw" />
              </Column>
            );
        })
        }
      </Row>
      <BtnWrapper>
        <Button type="button" onClick={() => getMoreImages(10, ++images.page, images.category_ids)}>More</Button>
      </BtnWrapper>
    </Container>
  )
}

export default Content;