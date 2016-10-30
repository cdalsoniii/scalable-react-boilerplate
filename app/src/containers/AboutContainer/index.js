import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Headline from 'grommet-udacity/components/Headline';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { Divider, About } from 'components';

class AboutContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      contributors,
      links,
    } = this.props;
    return (
      <Box>
        <Section>
          <Headline>
            About
          </Headline>
          <Divider />
        </Section>
        <About contributors={contributors} links={links} />
      </Box>
    );
  }
}

AboutContainer.propTypes = {
  contributors: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  contributors: state.landing.contributors,
  links: state.landing.contributors,
});

const Container = AboutContainer;

export default connect(
  mapStateToProps,
)(Container);
