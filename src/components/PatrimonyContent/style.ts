import styled from 'styled-components';
import theme from '../../styles/styled-theme';  

export const Container = styled.div`
  padding: 2rem;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const ChartContainer = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  img {
    width: 250px;
    height: auto;
  }
`;

export const TotalBox = styled.div`
  background: ${theme.color.main.primary.default};
  padding: 1.5rem;
  border-radius: 10px;
  color: white;
  align-items: right;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;

  }

  p {
    font-size: 0.9rem;
  }

  div {
    background: white;
    color: ${theme.color.main.primary.default};
    margin: 1rem 0;
    padding: 1rem;
    width: 350px;
    border-radius: 8px;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 0.75rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  th {
    font-weight: bold;
  }

  td:last-child {
    text-align: center;
  }
`;
