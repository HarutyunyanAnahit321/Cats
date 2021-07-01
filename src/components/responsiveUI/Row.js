import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  &.align-items-start {
    align-items: flex-start !important;
  }

  &.align-items-center {
    align-items: center !important;
  }

  &.align-items-end {
    align-items: flex-end !important;
  }

  &.justify-content-start {
    justify-content: flex-start !important;
  }

  &.justify-content-center {
    justify-content: center !important;
  }

  &.justify-content-end {
    justify-content: flex-end !important;
  }

  &.justify-content-around {
    justify-content: space-around !important;
  }

  &.justify-content-between {
    justify-content: space-between !important;
  }
`;

export default Row;
