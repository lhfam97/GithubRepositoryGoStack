import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: a8a8b3;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
  }
  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display:flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        colort:#737380
        margin-top:4px;
      }
    }

  }
  ul{
    display:flex;
    list-style:none;
    margin-top:40px;
    li{
      & +li{
        margin-left:80px;
      }
      strong{
        display:block;
        font-size:36px;
      }
      span{
        display:block;
        color:#6c6c80;
      }
    }
  }
`;
export const Issues = styled.div`
  margin-top: 80px;
  a + a {
    margin-top: 15px;
  }
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    div {
      flex: 1;
      margin: 0 16px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
    &:hover {
      transform: translateX(10px);
    }
  }
`;
export const Error = styled.span`
  display: block;
  color: #c53030;
`;