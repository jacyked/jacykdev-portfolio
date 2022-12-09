import { TypeAnimation } from 'react-type-animation';

function AnimatedHeader(props) {
    return (
      <TypeAnimation
        sequence={props.sequence}
        wrapper={props.wrapper}
        cursor={true}
        repeat={props.repeat}
        style={{ fontSize: '2em' }}
      />
    );
}

export default AnimatedHeader;