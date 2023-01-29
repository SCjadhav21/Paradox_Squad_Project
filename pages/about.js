import React from 'react'
import Image from 'next/image'
import { Heading,Text ,Box} from '@chakra-ui/react'

const about = () => {
  return (
    <div>
     <Image src={"/moto.jpeg"} width={1920} height={400}/>
    <Box bg='tomato' w='100%' p={10} color='white' margin={"auto"} fontSize="20px">
    Impact classes is India's Premier institution established with the sole aim to initiate, enable and empower individuals to grow up to be extraordinary professionals.
    The reason
It’s because almost 95% of these exam aspirants

First, don’t know where to focus. Due to sheer negligence, they end up building command on most irrelevant or un-important questions.

Second, many a student is not able to understand the difference between an ‘actually’ difficult question and a ‘seemingly’ difficult one. If simply put, they tend to leave a good number of questions un-attempted considering them too hard to crack while the questions can easily be solved using a right approach and that’s too in 50-60% less time than they earlier attempted to solve them in.

</Box>
<Box bg='teal' w='100%' p={10} color='white' fontSize="20px">
Impact Academy makes heaps of contents go through the state-of-the-art, technologically driven and adaptive application that identifies the ‘trend’ and provides you with most relevant set of questions as per your exam selection and hence helps you focus on actually where it’s needed.

It at the same time through its ‘Rating feature’ gets you to understand which questions are there that are being considered difficult by most of the students.

Next, it offers a smart way to solve a problem that is most likely to come in the exam but ‘seems’ complex to many. In simple words, you’ll smartly be able to answer those specific questions which are crucial and are being skipped by other students and that’s where you can get an upper-hand over your peers.
</Box>

    
    <Image src={"/about.jpeg"} width={1920} height={400}/>
      
    </div>
  )
}

export default about
