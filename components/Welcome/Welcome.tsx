import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'lightgreen', to: 'lightblue' }}
        >
          Shamrock Farms
        </Text>
      </Title>
      {/* <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {`Clifton Township, WI \n Est. 2008`}
      </Text> */}
    </>
  );
}
