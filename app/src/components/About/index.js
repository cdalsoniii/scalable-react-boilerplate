import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Heading from 'grommet-udacity/components/Heading';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Anchor from 'grommet-udacity/components/Anchor';
import Columns from 'grommet-udacity/components/Columns';
import {
  Divider,
  Contributor,
} from 'components';

const About = ({
  contributors,
  links,
  name,
}) => (
  <Box>
    <Section align="center" justify="center">
      <Headline align="center">
        About the App
      </Headline>
      <Divider />
    </Section>
    <Section align="center" justify="center">
      <Heading align="center">
        {name && `Welcome ${name}!`}
      </Heading>
      <Heading tag="h4" align="center">
        This boilerplate was made as a tool for use in Udacity Alumni projects.
      </Heading>
      <Heading tag="h4" align="center">
        Since making it, is has been used in dozens of projects.
      </Heading>
      <Heading tag="h4" align="center">
        Some of these are listed below
      </Heading>
      <Box align="center" pad="medium">
        <List>
          {links.map((link, i) =>
            <ListItem key={i}>
              <Anchor href={link.url}>
                {link.name}
              </Anchor>
            </ListItem>
          )}
        </List>
      </Box>
    </Section>
    <Section align="center" justify="center">
      <Headline align="center">
        {'Who\'s Behind all This?'}
      </Headline>
      <Divider />
      <Columns
        maxCount={2}
        justify="center"
        masonry
      >
        {contributors.map((person, i) =>
          <Contributor key={i} person={person} />
        )}
      </Columns>
    </Section>
    <Footer pad="large" align="center" jusify="center" direction="column">
      <Heading align="center" tag="h2">
        Have any questions?
      </Heading>
      <Box align="center" justify="center" pad="medium">
        <Button label="Get in Touch" href="mailto:admin@ryancollins.io" />
      </Box>
    </Footer>
  </Box>
);

About.propTypes = {
  contributors: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  name: PropTypes.string,
};

export default About;
