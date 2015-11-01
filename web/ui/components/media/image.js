import React from 'react';

export default React.createClass({
    render: () => {
        return (
            <div className="image">
                <img
                    className="image__image"
                    src={this.props.src}
                    width={this.props.width}
                    height={this.props.height}
                    alt={this.props.alt} />
            </div>
        );
    }
});
