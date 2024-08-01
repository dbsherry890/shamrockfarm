import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.45} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Clifton Township, WI</Title>

        <Container size={640}>
          <Text size="xl" className={classes.description}>
            Est. 2008
          </Text>
        </Container>
      </div>
    </div>
  );
}
