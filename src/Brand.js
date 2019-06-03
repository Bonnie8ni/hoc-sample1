import React, { Component } from 'react';
import styles from './Brand.module.scss';

class Brand extends Component {
    render() {
        const { open, toggleOpen, data } = this.props;
        return (
            <div className={styles.box}>
                <button
                    className={styles['box__bar']}
                    onClick={toggleOpen}>{data.title}</button>
                <div className={styles['box__list']}>
                {
                    open && data.images.map((img, idx) => {
                        return (
                            <img
                                key={`${img.title + idx }`}
                                alt={img.title}
                                src={img.url}
                            />
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default Brand;