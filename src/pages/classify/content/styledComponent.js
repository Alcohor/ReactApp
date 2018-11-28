import styled from 'styled-components'

export const ScrollBox = styled.div`
    background: #f4f4f8;
    position:absolute;
    width:100%;
    height: 1.02631579rem;
    overflow:hidden;
`
export const ScrollWrap = styled.div`
    height:100%;
    width:150%;
    flex-wrap:nowrap;
    display:flex;
`


export const ScrollItems =styled.span`
    display:inline-block;
    height:1.013333rem;
    margin-right:1.12rem;
    flex-shrink:0;
    width:auto;
    line-height: 1.013333rem;
    font-size: .34210526rem;
    color: #4c4d53;
`


export const CardWraper = styled.section`
    display:inline-block;
    width:4.293333rem;
    height:6.4rem;
    img{
        width:100%;
        border-radius:8px;
    }
    h1{
        color: #5c5c5c;
        font-size: .32rem;
        height: .96rem;
        overflow: hidden;
        text-overflow: ellipsis;
        margin:0;
    }
`
export const DiscountPrice = styled.span`
    color: #ced0dd;
    font-size: .29333333rem;
    line-height: .66666667rem;
    text-decoration: line-through;
    margin-left: .21333333rem;
`

export const Price = styled.span`
    font-size: .34666667rem;
    color: #ff4683;
    margin-left: .13333333rem;
    font-weight: 700;
    line-height: .66666667rem;
`


