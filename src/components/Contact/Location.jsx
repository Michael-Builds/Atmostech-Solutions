import React from 'react';

function Map() {
    return (
        <section className='justify-center center'>
            <div>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2866334652394!2d0.4602674742325949!3d6.61126342213883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10272524c3e196fd%3A0x427847d77aecbb69!2sVOLTA%20ECG%20CREDIT%20UNION!5e0!3m2!1sen!2sgh!4v1689244513997!5m2!1sen!2sgh"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}

export default Map;