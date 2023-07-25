import styled from "@emotion/styled";

export const Button = styled.button`
    --black: #262626;
    --blue: #0033A0;
    --light-blue: #C3C9ED;
    --white: #FFFFFF;
    --gray: #676767;
    --light-gray: #67676719;
    
    color: ${({color})=> color === 'primary' ? 'var(--white)' 
                        : (color === 'transparentPrimary' || color === 'secondary') ? 'var(--blue)' 
                        : color === 'transparentSecondary' ? 'var(--gray)' 
                        : 'var(--black)' };
    background-color: ${({color})=> color === 'primary' ? 'var(--blue)' : 'var(--white)'};
    border: 1px solid ${({color})=> color === 'primary' ? 'var(--blue)' 
                                    : color === 'secondary' ? 'var(--blue)'
                                    : (color === 'transparentPrimary' || color === 'transparentSecondary') ? 'transparent'
                                    :'var(--black)'};

    border-radius: 100px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding: 12px 24px;
    cursor: pointer;
    height: 45px;    
    width: ${({width})=> width === 'big' ? '100%' : 
                         width === 'medium' ? '201.5px' : 
                         width === 'small' ? '160px' : 'auto'};
    line-height: 17px;
    letter-spacing: 0.5px;
    box-sizing: border-box;

    &:hover{
        background: ${({color})=> color === 'primary' ? 'linear-gradient(0deg, rgba(214, 21, 0, 0.08), rgba(214, 21, 0, 0.08)), var(--blue)' 
                                                    : (color === 'secondary' || color === 'transparentPrimary') ? 'var(--light-blue)'
                                                    : 'var(--light-gray)'};
        box-shadow: ${({color})=> color === 'primary' && '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.3)'};
        border-radius: 100px;
    }

    &.secodary {
        color: var(--blue);
        background-color: var(--white);
    }

    &.disabled {
        opacity: .35;
        pointer-events: none;
    }
`;

export const Input = styled.input`
    --blue: #0033A0;
    --gray: #676767;
    --white: #FFFFFF;
    --black: #262626;

    border: none;
    outline: none;
    border-bottom: 1.6px solid var(--gray);
    background: var(--white);
    padding: 12px 10px 0;
    height: 46px;
    width: 100%;
    font-size: 20px;
    transition: 0.3s all ease;
    color: var(--black);

    &:focus{
        border-bottom: 1.6px solid var(--blue);
    }
`;

export const NavBar = styled.nav`
    position: fixed;
    top: 0;
    z-index: 10;
    height: 50px;
    width: 100%;
    padding: 8px 40px;
    background-color: #8AC4D4;
    display: flex;
    justify-content: space-between;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    color: white;

    & .list-menu {
        position: relative;
        height: 30px;
        width: 30px;
    }

    & .list-menu svg{
        position: absolute;
        z-index: 10;
    }
`;

export const ListMenu = styled.ul`
    position: absolute;
    top:35px;
    right:0;
    width:190px;
    display: ${(props) => props.isVisible ? 'block' : 'none'};
    list-style: none;
    padding: 0;
    color: #0033A0;;
    font-size: 16px;
    font-weight: 500;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3);
    transition: opacity .4s ease;

    & li {
        padding: 0 15px;
    }

    & li:hover {
        background: #183b860c;
        cursor: pointer;
    }

    
    & li .item {
        height: 45px;        
        padding: 10px 0px 8.6px 0px;
        border-bottom: 1px solid #E1E1E1;
    }

    & li .item .text{        
        display:inline-block;
    }
`;

export const SelectList =  styled.div`
    position: relative;
    display: ${props => props.isVisible ? 'flex' : 'none'};;
    flex-direction: row;
    justify-content: center;
    transition: 0.3s all ease;

    &  > .list-absolute {
        position: absolute;
        z-index: 10;
        width: 100%;
        padding: 1px;
        background-color: white;
    }

    &  > .list-absolute > ul.search-elements {
        list-style: none;
        margin: 0px;
        padding: 0px;
        border-radius: 8px;
        box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15);
    }

    &  > .list-absolute > ul.search-elements > li.text-result{
        font-weight: 600;
        font-size: 16px ;
        line-height: 21px;
        color: #0033A0;
        height: 65px;
        width: 100%;
        padding: 0px 16px 0px 16px;
        cursor: pointer;
        border-radius: 8px;
        margin-top: -0.5px;
    }
    
    &  > .list-absolute > ul.search-elements > li.text-result:hover {
        background: #183b860c;
    }
    
    &  > .list-absolute > ul.search-elements > li.text-result.selected {
        background: #E7EAF8;
    }
    
    &  > .list-absolute > ul.search-elements > li.text-result > .item {
        padding: 12px 0px 8.6px 0px;
        border-bottom: 1px solid #F6F6F6;
        height: 65px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: start;
    }
    
    &  > .list-absolute > ul.search-elements > li.text-result:hover > .item {
        padding: 12px 0px 8.6px 0px;
        border-bottom: 1px solid transparent
    }
`;