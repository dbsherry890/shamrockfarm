// import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Hero.module.css';
import Link from 'next/link';

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.45} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Clifton Township, WI</Title>

        <Container size={640} className={classes.description}>
          <Text size="1.2rem">Est. 2008</Text>
          <div>
            <Button component="a" href="/about" className={classes.button}>
              Learn More
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
