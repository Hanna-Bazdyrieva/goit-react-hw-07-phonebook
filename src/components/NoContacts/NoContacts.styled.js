import styled from 'styled-components';

export const Title = styled.h3`
  padding: ${p => p.theme.space[4]}px 0;
  margin: 0 auto;

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
