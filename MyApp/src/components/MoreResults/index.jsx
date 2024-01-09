/* eslint-disable react/prop-types */
import {Segment,Button} from 'semantic-ui-react'

const MoreResults = ({page,setPage}) => {

const fetchMore=()=>{
    setPage(page+1)
}


  return <Segment align="center">
    <Button onClick={fetchMore}>Plus de résultats</Button>
  </Segment>
};

export default MoreResults;
