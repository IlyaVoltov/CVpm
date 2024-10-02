import React, { useState } from 'react';

function Education() {
    return (
        <section class="detail-section edu">
        <div className="detail-title">
            <div className="title-icon">
                <i className="fas fa-user-graduate"></i>
            </div>
            <span>Образование</span>
        </div>
        <div className="detail-content">
            <div className="timeline-block">
                <h1>Эконометрика и статистический анализ</h1>
                <p>Санкт-Петербургский государственный экономический университет, Санкт-Петербург</p>
                <p>магистр</p>
                <time>2008 - 2013</time>
            </div>
            <div className="timeline-block">
                <h1>Институт промышленного менеджмента, экономики и торговли</h1>
                <p>Санкт-Петербургский политехнический университет Петра Великого, Санкт-Петербург</p>
                <p>аспирант</p>
                <time>2017</time>
            </div>
        </div>
    </section>
    );
}

export default Education;