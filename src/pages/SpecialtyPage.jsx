import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DepartmentHero from '../components/departments/DepartmentHero';
import DepartmentCare from '../components/departments/DepartmentCare';
import DepartmentDoctors from '../components/departments/DepartmentDoctors';
import Form from '../components/departments/Form';

const normalizeDepartmentName = (value = '') => (
    value
        .trim()
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/gynaec/g, 'gynec')
        .replace(/paedi/g, 'pedi')
        .replace(/orthopaed/g, 'orthoped')
        .replace(/[^a-z]/g, '')
);

const SpecialtyPage = () => {
    const { slug } = useParams();
    const [department, setDepartment] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deptLoading, setDeptLoading] = useState(true);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const fetchDepartment = async () => {
            setDeptLoading(true);
            try {
                const API_BASE_URL = window.location.hostname === 'localhost'
                    ? 'http://localhost:4000'
                    : 'https://ramakrishna-backend.onrender.com';

                const response = await fetch(`${API_BASE_URL}/api/departments/${slug}`);
                const data = await response.json();
                if (response.ok) {
                    setDepartment(data);
                }
            } catch (error) {
                console.error('Error fetching department:', error);
            } finally {
                setDeptLoading(false);
            }
        };

        fetchDepartment();
    }, [slug]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const API_BASE_URL = window.location.hostname === 'localhost'
                    ? 'http://localhost:4000'
                    : 'https://ramakrishna-backend.onrender.com';

                const response = await fetch(`${API_BASE_URL}/api/doctors`);
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    useEffect(() => {
        if (!department || !doctors.length) return;

        // If specific doctors are selected in the department, use them
        if (department.doctors?.selectedDoctors?.length > 0) {
            const selectedDocs = department.doctors.selectedDoctors;
            // Handle both populated (objects) and unpopulated (IDs) cases
            const isPopulated = typeof selectedDocs[0] === 'object' && selectedDocs[0] !== null;

            if (isPopulated) {
                setFilteredDoctors(selectedDocs);
            } else {
                const selected = doctors.filter(doc => selectedDocs.includes(doc._id));
                setFilteredDoctors(selected);
            }
        } else {
            // Fallback to automatic filtering by name/slug
            const normalizedDepartmentName = normalizeDepartmentName(department.name);
            const normalizedSlug = normalizeDepartmentName(slug);

            const filtered = doctors.filter((doc) => {
                const normalizedDocDepartment = normalizeDepartmentName(doc.department || '');
                const normalizedSpecialties = Array.isArray(doc.specialties)
                    ? doc.specialties.map((specialty) => normalizeDepartmentName(specialty))
                    : [];

                return [normalizedDocDepartment, ...normalizedSpecialties].some((normalizedValue) => (
                    normalizedValue === normalizedDepartmentName ||
                    normalizedValue === normalizedSlug
                ));
            });
            setFilteredDoctors(filtered);
        }
    }, [department, doctors, slug]);

    if (deptLoading || !department) {
        return <div className="min-h-screen bg-white"></div>;
    }

    return (
        <div className="specialty-page">
            <DepartmentHero
                data={department.hero}
                doctors={filteredDoctors}
                departmentName={department.name}
            />
            <DepartmentCare data={department.care} />
            <DepartmentDoctors
                doctors={filteredDoctors}
                departmentName={department.name}
                title={department.doctors?.title}
                subtitle={department.doctors?.subtitle}
                description={department.doctors?.description}
            />
            <div id="form-section">
                <Form department={department.name} />
            </div>
        </div>
    );
};

export default SpecialtyPage;