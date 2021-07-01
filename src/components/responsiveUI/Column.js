import styled from 'styled-components';

const Column = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 30px;
  text-align: center;
  &.xs,
  &.xs-1,
  &.xs-10,
  &.xs-11,
  &.xs-12,
  &.xs-2,
  &.xs-3,
  &.xs-4,
  &.xs-5,
  &.xs-6,
  &.xs-7,
  &.xs-8,
  &.xs-9,
  &.auto,
  &.lg,
  &.lg-1,
  &.lg-10,
  &.lg-11,
  &.lg-12,
  &.lg-2,
  &.lg-3,
  &.lg-4,
  &.lg-5,
  &.lg-6,
  &.lg-7,
  &.lg-8,
  &.lg-9,
  &.lg-auto,
  &.md,
  &.md-1,
  &.md-10,
  &.md-11,
  &.md-12,
  &.md-2,
  &.md-3,
  &.md-4,
  &.md-5,
  &.md-6,
  &.md-7,
  &.md-8,
  &.md-9,
  &.md-auto,
  &.sm,
  &.sm-1,
  &.sm-10,
  &.sm-11,
  &.sm-12,
  &.sm-2,
  &.sm-3,
  &.sm-4,
  &.sm-5,
  &.sm-6,
  &.sm-7,
  &.sm-8,
  &.sm-9,
  &.sm-auto,
  &.xl,
  &.xl-1,
  &.xl-10,
  &.xl-11,
  &.xl-12,
  &.xl-2,
  &.xl-3,
  &.xl-4,
  &.xl-5,
  &.xl-6,
  &.xl-7,
  &.xl-8,
  &.xl-9,
  &.xl-auto {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  &.xs-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  &.xs-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  &.xs-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  &.xs-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  &.xs-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  &.xs-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &.xs-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  &.xs-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  &.xs-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  &.xs-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  &.xs-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  &.xs-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    &.sm-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
  }

  @media (min-width: 576px) {
    &.sm-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
  }

  @media (min-width: 576px) {
    &.sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }

  @media (min-width: 576px) {
    &.sm-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  }

  @media (min-width: 576px) {
    &.sm-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
  }

  @media (min-width: 576px) {
    &.sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: 576px) {
    &.sm-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  }

  @media (min-width: 576px) {
    &.sm-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
  }

  @media (min-width: 576px) {
    &.sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
  }

  @media (min-width: 576px) {
    &.sm-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
  }

  @media (min-width: 576px) {
    &.sm-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
  }

  @media (min-width: 576px) {
    &.sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 768px) {
    &.md-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
  }

  @media (min-width: 768px) {
    &.md-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
  }

  @media (min-width: 768px) {
    &.md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }

  @media (min-width: 768px) {
    &.md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  }
  @media (min-width: 768px) {
    &.md-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
  }
  @media (min-width: 768px) {
    &.md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (min-width: 768px) {
    &.md-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  }
  @media (min-width: 768px) {
    &.md-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
  }
  @media (min-width: 768px) {
    &.md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
  }

  @media (min-width: 768px) {
    &.md-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
  }

  @media (min-width: 768px) {
    &.md-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
  }

  @media (min-width: 768px) {
    &.md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 992px) {
    &.lg-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
  }

  @media (min-width: 992px) {
    &.lg-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
  }

  @media (min-width: 992px) {
    &.lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }

  @media (min-width: 992px) {
    &.lg-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  }

  @media (min-width: 992px) {
    &.lg-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
  }

  @media (min-width: 992px) {
    &.lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: 992px) {
    &.lg-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  }

  @media (min-width: 992px) {
    &.lg-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
  }

  @media (min-width: 992px) {
    &.lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
  }

  @media (min-width: 992px) {
    &.lg-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
  }

  @media (min-width: 992px) {
    &.lg-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
  }

  @media (min-width: 992px) {
    &.lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 1200px) {
    &.xl-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
  }

  @media (min-width: 1200px) {
    &.xl-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
  }
  @media (min-width: 1200px) {
    &.xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  &.align-self-start {
    align-self: flex-start !important;
  }
  &.align-self-center {
    align-self: center !important;
  }
  &.align-self-end {
    align-self: flex-end !important;
  }
`;

export default Column;
