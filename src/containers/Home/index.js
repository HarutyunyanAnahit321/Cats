import { useEffect } from "react";
import { connect } from 'react-redux';
import { getImageList, getMoreImages } from '../../store/actions';
import Content from "../../components/Content";
import { Wrapper } from './styled';

function HomePage({ category, images, getImages, getMoreImg }) {
  useEffect(() => {
    if (category) {
      getImages(10, 1, category);
    } else {
      getImages();
    }
  }, [category]);

  return (
    <Wrapper>
      <Content images={images} getMoreImages={getMoreImg}/>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  images: state.catImages,
});


const mapDispatchToProps = {
  getImages: getImageList,
  getMoreImg: getMoreImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);