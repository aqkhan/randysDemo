import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import Layout from "../components/Layout";
import withData from '../configration/withData';

const query = gql`
{
 randysProductSearch(title:"yukon") {
   ProductID
   Title
   ThumbImage
 }
}
`;

const index = (props) => (
    <Layout>
        {console.log(props)}
        <h1>Freaking homepage</h1>
    </Layout>
);
const GraphqlIndex  = graphql(query)(index);
export default withData(GraphqlIndex);