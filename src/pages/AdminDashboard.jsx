import React, { useEffect, useState } from 'react';
import {
    IoArrowBack, IoSearch, IoFilter, IoDownload, IoRefresh,
    IoPeople, IoLogOut, IoGrid, IoMedical, IoStatsChart,
    IoMenu, IoClose, IoTrash, IoPersonAdd, IoAddCircle, IoPencil,
    IoReorderTwoOutline, IoSettingsOutline, IoCloudUploadOutline, IoMegaphoneOutline
} from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import toast, { Toaster } from 'react-hot-toast';

const SortableDepartmentRow = ({ dept, onEdit, onDelete }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: dept._id });
    const style = { transform: CSS.Transform.toString(transform), transition, zIndex: isDragging ? 100 : 'auto', opacity: isDragging ? 0.5 : 1, background: isDragging ? '#f1f5f9' : 'white' };
    return (
        <tr ref={setNodeRef} style={style} className="divide-x hover:bg-slate-50 transition-colors">
            <td className="px-4 py-5 text-center cursor-grab active:cursor-grabbing text-slate-400 hover:text-[#19628D]" {...attributes} {...listeners}><IoReorderTwoOutline size={24} /></td>
            <td className="px-6 py-5 font-black text-[#0B5D85]">{dept.name}</td>
            <td className="px-6 py-5 text-slate-500">{dept.slug}</td>
            <td className="px-6 py-5 text-center flex gap-2 justify-center">
                <button onClick={() => onEdit(dept)} className="text-blue-500 p-2 hover:bg-blue-50 rounded-lg"><IoPencil size={18} /></button>
                <button onClick={() => onDelete(dept._id)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg"><IoTrash size={18} /></button>
            </td>
        </tr>
    );
};

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [leads, setLeads] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [adsPages, setAdsPages] = useState([]);
    const [seoSettings, setSeoSettings] = useState([]);
    const [settings, setSettings] = useState({ siteTitle: '', metaDescription: '', faviconUrl: '' });
    const [homePageSettings, setHomePageSettings] = useState({ hero: { title: '', image: null, currentImage: '' }, excellence: { title: '', description: '' }, careData: [] });
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeView, setActiveView] = useState('leads');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));

    // Modal & Form States
    const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
    const [editingDoctorId, setEditingDoctorId] = useState(null);
    const [newDoctor, setNewDoctor] = useState({ name: '', qualification: '', designation: '', department: '', specialties: '', schedule: '', image: null, priority: 0, currentImage: '', experience: '', days: '' });

    const [isDeptModalOpen, setIsDeptModalOpen] = useState(false);
    const [editingDeptId, setEditingDeptId] = useState(null);
    const [newDept, setNewDept] = useState({ name: '', slug: '', priority: 0, heroTitle: '', heroFormTitle: '', heroFormSubtitle: '', heroConcerns: '', careTitle: '', careDescription: '', careItems: '', doctorsTitle: '', doctorsSubtitle: '', doctorsDescription: '', selectedDoctors: [], heroImageFile: null, careIconFile: null, currentHeroImage: '', currentCareIcon: '' });

    const [isAdsModalOpen, setIsAdsModalOpen] = useState(false);
    const [editingAdsId, setEditingAdsId] = useState(null);
    const [newAds, setNewAds] = useState({
        slug: '',
        heroTitle: '', heroSubtitle: '', heroImage: null, currentHeroImage: '',
        infoTitle: '', infoDescription: '', infoSideText: '', infoBottomText: '', infoImage: null, currentInfoImage: '', infoImageClass: '',
        symptomsTitle: '', symptomsSubtitle: '',
        symptomsItems: [{ title: '', image: null, currentImage: '' }],
        benefitsTitle: '', benefitsItems: '',
        doctorsTitle: '', doctorsDepartment: '', doctorsFormDepartment: ''
    });

    const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
    const [editingSeoId, setEditingSeoId] = useState(null);
    const [newSeo, setNewSeo] = useState({ pageUrl: '', metaTitle: '', metaDescription: '' });

    const [isCareDataModalOpen, setIsCareDataModalOpen] = useState(false);
    const [editingCareIndex, setEditingCareIndex] = useState(null);
    const [newCareItem, setNewCareItem] = useState({ title: '', slug: '', description: '', image: null, currentImage: '' });

    const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
    const [isExcellenceModalOpen, setIsExcellenceModalOpen] = useState(false);
    const [tempHero, setTempHero] = useState({ title: '', image: null, currentImage: '' });
    const [tempExcellence, setTempExcellence] = useState({ title: '', description: '' });

    useEffect(() => {
        const isAuth = localStorage.getItem('isAdminAuthenticated');
        if (isAuth !== 'true') navigate('/admin-login');
    }, [navigate]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
            if (activeView === 'leads') {
                const res = await fetch(`${API_BASE_URL}/api/leads`);
                setLeads(await res.json());
            } else if (activeView === 'doctors') {
                const res = await fetch(`${API_BASE_URL}/api/doctors`);
                setDoctors(await res.json());
            } else if (activeView === 'departments') {
                const res = await fetch(`${API_BASE_URL}/api/departments`);
                setDepartments(await res.json());
                const resDocs = await fetch(`${API_BASE_URL}/api/doctors`);
                setDoctors(await resDocs.json());
            } else if (activeView === 'ads') {
                const res = await fetch(`${API_BASE_URL}/api/landing-pages`);
                setAdsPages(await res.json());
            } else if (activeView === 'seo') {
                const res = await fetch(`${API_BASE_URL}/api/seo`);
                setSeoSettings(await res.json());
            } else if (activeView === 'settings') {
                const res = await fetch(`${API_BASE_URL}/api/settings`);
                setSettings(await res.json());
            } else if (activeView === 'home-page') {
                const res = await fetch(`${API_BASE_URL}/api/home-page`);
                const data = await res.json();
                setHomePageSettings({
                    hero: { title: data.hero?.title || '', image: null, currentImage: data.hero?.image || '' },
                    excellence: { title: data.excellence?.title || '', description: data.excellence?.description || '' },
                    careData: data.careData?.map(item => ({ title: item.title || '', slug: item.slug || '', description: item.description || '', currentImage: item.image || '', image: null })) || []
                });
            }
        } catch (error) { console.error('Fetch error:', error); } finally { setLoading(false); }
    };

    useEffect(() => { fetchData(); }, [activeView]);

    // ... Handlers ...
    const handleUpdateSettings = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
            const formData = new FormData();
            formData.append('siteTitle', settings.siteTitle);
            formData.append('metaDescription', settings.metaDescription);
            if (settings.faviconFile) formData.append('favicon', settings.faviconFile);
            const res = await fetch(`${API_BASE_URL}/api/settings`, { method: 'PUT', body: formData });
            if (res.ok) toast.success('Settings updated successfully!');
        } catch (error) { toast.error('Failed to update settings'); } finally { setLoading(false); }
    };

    const handleUpdateHomePage = async (e, customSettings = null) => {
        if (e) e.preventDefault();
        setLoading(true);
        const currentSettings = customSettings || homePageSettings;
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
            const pageData = {
                hero: { title: currentSettings.hero.title, image: currentSettings.hero.currentImage },
                excellence: { title: currentSettings.excellence.title, description: currentSettings.excellence.description },
                careData: currentSettings.careData.map(item => ({ title: item.title, slug: item.slug, description: item.description, image: item.currentImage }))
            };
            const formData = new FormData();
            formData.append('data', JSON.stringify(pageData));
            if (currentSettings.hero.image) formData.append('heroImage', currentSettings.hero.image);
            currentSettings.careData.forEach((item, idx) => {
                if (item.image) formData.append(`careImage_${idx}`, item.image);
            });
            const res = await fetch(`${API_BASE_URL}/api/home-page`, { method: 'PUT', body: formData });
            if (res.ok) { toast.success('Home Page updated successfully!'); fetchData(); }
        } catch (error) { toast.error('Failed to update Home Page'); } finally { setLoading(false); }
    };

    const handleEditCareItem = (idx) => {
        setEditingCareIndex(idx);
        const item = homePageSettings.careData[idx];
        setNewCareItem({ title: item.title, slug: item.slug, description: item.description, currentImage: item.currentImage, image: null });
        setIsCareDataModalOpen(true);
    };

    const handleSaveCareItem = async (e) => {
        e.preventDefault();
        const newCareData = [...homePageSettings.careData];
        if (editingCareIndex !== null) {
            newCareData[editingCareIndex] = { ...newCareItem, image: newCareItem.image || newCareData[editingCareIndex].image };
        } else {
            newCareData.push(newCareItem);
        }
        const newSettings = { ...homePageSettings, careData: newCareData };
        setHomePageSettings(newSettings);
        setIsCareDataModalOpen(false);
        await handleUpdateHomePage(null, newSettings);
    };

    const handleDeleteCareItem = async (idx) => {
        if (!window.confirm('Remove this Care Data item?')) return;
        const newCareData = homePageSettings.careData.filter((_, i) => i !== idx);
        const newSettings = { ...homePageSettings, careData: newCareData };
        setHomePageSettings(newSettings);
        await handleUpdateHomePage(null, newSettings);
    };

    const handleEditHero = () => {
        setTempHero({ title: homePageSettings.hero.title, image: null, currentImage: homePageSettings.hero.currentImage });
        setIsHeroModalOpen(true);
    };

    const handleSaveHero = async (e) => {
        e.preventDefault();
        const newSettings = { ...homePageSettings, hero: { ...tempHero, image: tempHero.image || homePageSettings.hero.image } };
        setHomePageSettings(newSettings);
        setIsHeroModalOpen(false);
        await handleUpdateHomePage(null, newSettings);
    };

    const handleEditExcellence = () => {
        setTempExcellence({ title: homePageSettings.excellence.title, description: homePageSettings.excellence.description });
        setIsExcellenceModalOpen(true);
    };

    const handleSaveExcellence = async (e) => {
        e.preventDefault();
        const newSettings = { ...homePageSettings, excellence: tempExcellence };
        setHomePageSettings(newSettings);
        setIsExcellenceModalOpen(false);
        await handleUpdateHomePage(null, newSettings);
    };

    const handleDragEnd = async (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setDepartments((items) => {
                const oldIndex = items.findIndex(i => i._id === active.id);
                const newIndex = items.findIndex(i => i._id === over.id);
                const newOrder = arrayMove(items, oldIndex, newIndex);
                const updated = newOrder.map((dept, index) => ({ ...dept, priority: index + 1 }));
                saveOrder(updated);
                return updated;
            });
        }
    };

    const saveOrder = async (updatedDepts) => {
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
            const orders = updatedDepts.map(dept => ({ id: dept._id, priority: dept.priority }));
            await fetch(`${API_BASE_URL}/api/departments/reorder`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ orders }) });
        } catch (error) { console.error(error); }
    };

    const handleDeleteLead = async (id) => { if (!window.confirm('Delete lead?')) return; try { const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com'; const res = await fetch(`${API_BASE_URL}/api/leads/${id}`, { method: 'DELETE' }); if (res.ok) setLeads(prev => prev.filter(l => l._id !== id)); } catch (e) { } };
    const handleDeleteDoctor = async (id) => { if (!window.confirm('Remove doctor?')) return; try { const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com'; const res = await fetch(`${API_BASE_URL}/api/doctors/${id}`, { method: 'DELETE' }); if (res.ok) setDoctors(prev => prev.filter(d => d._id !== id)); } catch (e) { } };
    const handleDeleteDept = async (id) => { if (!window.confirm('Delete department?')) return; try { const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com'; const res = await fetch(`${API_BASE_URL}/api/departments/${id}`, { method: 'DELETE' }); if (res.ok) setDepartments(prev => prev.filter(d => d._id !== id)); } catch (e) { } };
    const handleDeleteAds = async (id) => { if (!window.confirm('Delete ads page?')) return; try { const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com'; const res = await fetch(`${API_BASE_URL}/api/landing-pages/${id}`, { method: 'DELETE' }); if (res.ok) setAdsPages(prev => prev.filter(p => p._id !== id)); } catch (e) { } };
    const handleDeleteSeo = async (id) => { if (!window.confirm('Delete SEO entry?')) return; try { const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com'; const res = await fetch(`${API_BASE_URL}/api/seo/${id}`, { method: 'DELETE' }); if (res.ok) setSeoSettings(prev => prev.filter(s => s._id !== id)); } catch (e) { } };

    const handleEditDoctor = (doctor) => {
        setEditingDoctorId(doctor._id);
        setNewDoctor({
            name: doctor.name || '',
            qualification: doctor.qualification || '',
            designation: doctor.designation || '',
            department: doctor.department || '',
            specialties: Array.isArray(doctor.specialties) ? doctor.specialties.join(', ') : (doctor.specialties || ''),
            schedule: doctor.schedule || '',
            image: null,
            priority: doctor.priority || 0,
            currentImage: doctor.image || '',
            experience: doctor.experience || '',
            days: doctor.days || ''
        });
        setIsDoctorModalOpen(true);
    };

    const handleAddDoctor = async (e) => {
        e.preventDefault();
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
            const formData = new FormData();
            formData.append('name', newDoctor.name);
            formData.append('qualification', newDoctor.qualification);
            formData.append('designation', newDoctor.designation);
            formData.append('department', newDoctor.department);
            formData.append('schedule', newDoctor.schedule);
            formData.append('priority', newDoctor.priority);
            formData.append('specialties', newDoctor.specialties);
            formData.append('experience', newDoctor.experience);
            formData.append('days', newDoctor.days);
            if (newDoctor.image) formData.append('image', newDoctor.image);

            const url = editingDoctorId ? `${API_BASE_URL}/api/doctors/${editingDoctorId}` : `${API_BASE_URL}/api/doctors`;
            const res = await fetch(url, { method: editingDoctorId ? 'PUT' : 'POST', body: formData });
            if (res.ok) { setIsDoctorModalOpen(false); setEditingDoctorId(null); toast.success('Doctor saved!'); fetchData(); }
        } catch (error) { toast.error("Failed to save doctor"); }
    };

    const handleEditDept = (dept) => {
        setEditingDeptId(dept._id);
        setNewDept({
            name: dept.name || '',
            slug: dept.slug || '',
            priority: dept.priority || 0,
            heroTitle: dept.hero?.title || '',
            heroFormTitle: dept.hero?.formTitle || '',
            heroFormSubtitle: dept.hero?.formSubtitle || '',
            heroConcerns: dept.hero?.concerns?.join(', ') || '',
            careTitle: dept.care?.title || '',
            careDescription: dept.care?.description || '',
            careItems: dept.care?.items?.join(', ') || '',
            doctorsTitle: dept.doctors?.title || '',
            doctorsSubtitle: dept.doctors?.subtitle || '',
            doctorsDescription: dept.doctors?.description || '',
            selectedDoctors: dept.doctors?.selectedDoctors?.map(d => typeof d === 'object' ? d._id : d) || [],
            heroImageFile: null,
            careIconFile: null,
            currentHeroImage: dept.hero?.image || '',
            currentCareIcon: dept.care?.icon || ''
        });
        setIsDeptModalOpen(true);
    };

    const handleAddDept = async (e) => {
        e.preventDefault();
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
            const deptData = {
                name: newDept.name, slug: newDept.slug, priority: Number(newDept.priority),
                hero: { image: newDept.currentHeroImage, title: newDept.heroTitle, formTitle: newDept.heroFormTitle, formSubtitle: newDept.heroFormSubtitle, concerns: newDept.heroConcerns.split(',').map(s => s.trim()).filter(s => s) },
                care: { icon: newDept.currentCareIcon, title: newDept.careTitle, description: newDept.careDescription, items: newDept.careItems.split(',').map(s => s.trim()).filter(s => s) },
                doctors: { title: newDept.doctorsTitle, subtitle: newDept.doctorsSubtitle, description: newDept.doctorsDescription, selectedDoctors: newDept.selectedDoctors }
            };
            const formData = new FormData();
            formData.append('data', JSON.stringify(deptData));
            if (newDept.heroImageFile) formData.append('heroImage', newDept.heroImageFile);
            if (newDept.careIconFile) formData.append('careIcon', newDept.careIconFile);

            const url = editingDeptId ? `${API_BASE_URL}/api/departments/${editingDeptId}` : `${API_BASE_URL}/api/departments`;
            const res = await fetch(url, { method: editingDeptId ? 'PUT' : 'POST', body: formData });
            if (res.ok) { setIsDeptModalOpen(false); setEditingDeptId(null); toast.success('Department saved!'); fetchData(); }
        } catch (error) { toast.error("Failed to save department"); }
    };

    const toggleDoctorSelection = (doctorId) => {
        setNewDept(prev => {
            const selected = prev.selectedDoctors.includes(doctorId)
                ? prev.selectedDoctors.filter(id => id !== doctorId)
                : [...prev.selectedDoctors, doctorId];
            return { ...prev, selectedDoctors: selected };
        });
    };

    // Ads Handlers
    const handleEditAds = (page) => {
        setEditingAdsId(page._id);
        setNewAds({
            slug: page.slug || '',
            heroTitle: page.hero?.title || '',
            heroSubtitle: page.hero?.subtitle || '',
            currentHeroImage: page.hero?.image || '',
            infoTitle: page.info?.title || '',
            infoDescription: page.info?.description || '',
            infoSideText: page.info?.sideText || '',
            infoBottomText: page.info?.bottomText || '',
            currentInfoImage: page.info?.image || '',
            infoImageClass: page.info?.imageClass || '',
            symptomsTitle: page.symptoms?.title || '',
            symptomsSubtitle: page.symptoms?.subtitle || '',
            symptomsItems: page.symptoms?.items?.map(item => ({ title: item.title, currentImage: item.image, image: null })) || [],
            benefitsTitle: page.benefits?.title || '',
            benefitsItems: page.benefits?.items?.join('\n') || '',
            doctorsTitle: page.doctors?.title || '',
            doctorsDepartment: page.doctors?.department || '',
            doctorsFormDepartment: page.doctors?.formDepartment || ''
        });
        setIsAdsModalOpen(true);
    };

    const handleAddAds = async (e) => {
        e.preventDefault();
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
            const pageData = {
                slug: newAds.slug,
                hero: { title: newAds.heroTitle, subtitle: newAds.heroSubtitle, image: newAds.currentHeroImage },
                info: { title: newAds.infoTitle, description: newAds.infoDescription, sideText: newAds.infoSideText, bottomText: newAds.infoBottomText, image: newAds.currentInfoImage, imageClass: newAds.infoImageClass },
                symptoms: { title: newAds.symptomsTitle, subtitle: newAds.symptomsSubtitle, items: newAds.symptomsItems.map(it => ({ title: it.title, image: it.currentImage })) },
                benefits: { title: newAds.benefitsTitle, items: newAds.benefitsItems.split('\n').map(s => s.trim()).filter(s => s) },
                doctors: { title: newAds.doctorsTitle, department: newAds.doctorsDepartment, formDepartment: newAds.doctorsFormDepartment }
            };

            const formData = new FormData();
            formData.append('data', JSON.stringify(pageData));
            if (newAds.heroImage) formData.append('heroImage', newAds.heroImage);
            if (newAds.infoImage) formData.append('infoImage', newAds.infoImage);
            newAds.symptomsItems.forEach((item, idx) => {
                if (item.image) formData.append(`symptomsImage_${idx}`, item.image);
            });

            const url = editingAdsId ? `${API_BASE_URL}/api/landing-pages/${editingAdsId}` : `${API_BASE_URL}/api/landing-pages`;
            const res = await fetch(url, { method: editingAdsId ? 'PUT' : 'POST', body: formData });
            if (res.ok) { setIsAdsModalOpen(false); setEditingAdsId(null); toast.success('Ads Page saved!'); fetchData(); }
        } catch (error) { toast.error("Failed to save ads page"); }
    };

    const handleLogout = () => { localStorage.removeItem('isAdminAuthenticated'); navigate('/admin-login'); };

    const handleEditSeo = (seo) => {
        setEditingSeoId(seo._id);
        setNewSeo({ pageUrl: seo.pageUrl, metaTitle: seo.metaTitle || '', metaDescription: seo.metaDescription || '' });
        setIsSeoModalOpen(true);
    };

    const handleAddSeo = async (e) => {
        e.preventDefault();
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://ramakrishna-backend.onrender.com';
            const res = await fetch(`${API_BASE_URL}/api/seo`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSeo)
            });
            if (res.ok) { setIsSeoModalOpen(false); setEditingSeoId(null); toast.success('SEO saved!'); fetchData(); }
        } catch (error) { toast.error("Failed to save SEO"); }
    };

    const filteredLeads = leads.filter(l => l.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) || l.mobileNumber?.includes(searchTerm));
    const filteredDoctors = doctors.filter(d => d.name?.toLowerCase().includes(searchTerm.toLowerCase()) || d.department?.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredDepartments = departments.filter(d => d.name?.toLowerCase().includes(searchTerm.toLowerCase()) || d.slug?.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredAds = adsPages.filter(p => p.slug?.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredSeo = seoSettings.filter(s => s.pageUrl?.toLowerCase().includes(searchTerm.toLowerCase()) || s.metaTitle?.toLowerCase().includes(searchTerm.toLowerCase()));
    const formatDate = (ds) => new Date(ds).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    return (
        <div className="flex min-h-screen bg-[#F8FAFC] font-sohne relative">
            <Toaster position="top-right" />

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 h-screen w-72 bg-[#19628D] text-white flex flex-col z-[70] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="p-8 border-b border-white/10 flex items-center justify-between"><h2 className="text-2xl font-bold tracking-tight">Atreum Admin</h2><button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}><IoClose size={24} /></button></div>
                <nav className="flex-1 p-6 space-y-2">
                    <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-4 ml-2">Management</div>
                    <button onClick={() => { setActiveView('leads'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeView === 'leads' ? 'bg-white/10 border border-white/5' : 'text-white/60 hover:bg-white/5'}`}><IoPeople size={20} /> Leads</button>
                    <button onClick={() => { setActiveView('doctors'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeView === 'doctors' ? 'bg-white/10 border border-white/5' : 'text-white/60 hover:bg-white/5'}`}><IoMedical size={20} /> Doctors List</button>
                    <button onClick={() => { setActiveView('departments'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeView === 'departments' ? 'bg-white/10 border border-white/5' : 'text-white/60 hover:bg-white/5'}`}><IoGrid size={20} /> Departments</button>
                    <button onClick={() => { setActiveView('ads'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeView === 'ads' ? 'bg-white/10 border border-white/5' : 'text-white/60 hover:bg-white/5'}`}><IoMegaphoneOutline size={20} /> Ads Pages</button>
                    <button onClick={() => { setActiveView('seo'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeView === 'seo' ? 'bg-white/10 border border-white/5' : 'text-white/60 hover:bg-white/5'}`}><IoSearch size={20} /> SEO Management</button>
                    <button onClick={() => { setActiveView('home-page'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeView === 'home-page' ? 'bg-white/10 border border-white/5' : 'text-white/60 hover:bg-white/5'}`}><IoGrid size={20} /> Home Page </button>
                    <button onClick={() => { setActiveView('settings'); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeView === 'settings' ? 'bg-white/10 border border-white/5' : 'text-white/60 hover:bg-white/5'}`}><IoSettingsOutline size={20} /> Site Settings</button>
                </nav>
                <div className="p-6 border-t border-white/10"><button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/20 text-red-100 hover:bg-red-500/30 rounded-xl transition-all font-bold border border-red-500/30"><IoLogOut size={20} /> Logout</button></div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-72 w-full min-w-0">
                <header className="lg:hidden bg-white border-b px-4 py-4 flex items-center justify-between sticky top-0 z-[50]"><h2 className="font-bold text-[#19628D]">Atreum Dashboard</h2><button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-slate-100 rounded-lg text-[#19628D]"><IoMenu size={24} /></button></header>
                <div className="p-4 md:p-8">
                    <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div><Link to="/" className="text-[#19628D] hover:underline mb-2 flex items-center gap-1"><IoArrowBack /> Website</Link><h1 className="text-3xl font-bold text-[#0B5D85]">{activeView === 'leads' ? 'Patient Leads' : activeView === 'doctors' ? 'Doctors Directory' : activeView === 'departments' ? 'Departments' : activeView === 'ads' ? 'Ads & Landing Pages' : activeView === 'seo' ? 'SEO Management' : activeView === 'home-page' ? 'Home Page ' : 'Global Settings'}</h1></div>
                        <div className="flex gap-3">
                            <button onClick={fetchData} className="flex items-center gap-2 px-4 py-2.5 bg-white text-[#19628D] border border-[#19628D] rounded-xl font-bold"><IoRefresh /> Refresh</button>
                            {activeView === 'doctors' && <button onClick={() => {
                                setEditingDoctorId(null);
                                setNewDoctor({ name: '', qualification: '', designation: '', department: '', specialties: '', schedule: '', image: null, priority: 0, currentImage: '' });
                                setIsDoctorModalOpen(true);
                            }} className="px-6 py-2.5 bg-[#0FB1AB] text-white rounded-xl font-bold shadow-lg shadow-[#0FB1AB]/20"><IoPersonAdd /> Add Doctor</button>}
                            {activeView === 'departments' && <button onClick={() => {
                                setEditingDeptId(null);
                                setNewDept({ name: '', slug: '', priority: 0, heroTitle: '', heroFormTitle: '', heroFormSubtitle: '', heroConcerns: '', careTitle: '', careDescription: '', careItems: '', doctorsTitle: '', doctorsSubtitle: '', doctorsDescription: '', selectedDoctors: [], heroImageFile: null, careIconFile: null, currentHeroImage: '', currentCareIcon: '' });
                                setIsDeptModalOpen(true);
                            }} className="px-6 py-2.5 bg-[#0FB1AB] text-white rounded-xl font-bold shadow-lg shadow-[#0FB1AB]/20"><IoAddCircle /> Add Dept</button>}
                            {activeView === 'ads' && <button onClick={() => {
                                setEditingAdsId(null);
                                setNewAds({
                                    slug: '',
                                    heroTitle: '', heroSubtitle: '', heroImage: null, currentHeroImage: '',
                                    infoTitle: '', infoDescription: '', infoSideText: '', infoBottomText: '', infoImage: null, currentInfoImage: '', infoImageClass: '',
                                    symptomsTitle: '', symptomsSubtitle: '',
                                    symptomsItems: [{ title: '', image: null, currentImage: '' }],
                                    benefitsTitle: '', benefitsItems: '',
                                    doctorsTitle: '', doctorsDepartment: '', doctorsFormDepartment: ''
                                });
                                setIsAdsModalOpen(true);
                            }} className="px-6 py-2.5 bg-[#0FB1AB] text-white rounded-xl font-bold shadow-lg shadow-[#0FB1AB]/20"><IoAddCircle /> Add Ads Page</button>}
                            {activeView === 'seo' && <button onClick={() => {
                                setEditingSeoId(null);
                                setNewSeo({ pageUrl: '', metaTitle: '', metaDescription: '' });
                                setIsSeoModalOpen(true);
                            }} className="px-6 py-2.5 bg-[#0FB1AB] text-white rounded-xl font-bold shadow-lg shadow-[#0FB1AB]/20"><IoAddCircle /> Add SEO Entry</button>}
                        </div>
                    </div>

                    {activeView !== 'settings' && activeView !== 'home-page' && (
                        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative col-span-2"><IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="text" placeholder={`Search ${activeView}...`} className="w-full pl-12 pr-4 py-3 bg-white border rounded-2xl focus:ring-2 focus:ring-[#0FB1AB]/20" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /></div>
                            <div className="bg-white px-6 py-3 rounded-2xl border text-center"><span className="text-slate-500 mr-2 text-xs font-bold uppercase tracking-widest">Total</span><span className="text-2xl font-black text-[#19628D]">{activeView === 'leads' ? filteredLeads.length : activeView === 'doctors' ? filteredDoctors.length : activeView === 'departments' ? departments.length : activeView === 'seo' ? filteredSeo.length : adsPages.length}</span></div>
                        </div>
                    )}

                    {/* View Switcher */}
                    {activeView === 'leads' ? (
                        <div className="bg-white rounded-3xl shadow-xl border overflow-hidden"><table className="w-full text-left"><thead className="bg-[#19628D] text-white text-xs uppercase font-bold"><tr><th className="px-6 py-5">Date & Time</th><th className="px-6 py-5">Patient</th><th className="px-6 py-5">Dept.</th><th className="px-6 py-5 text-center">Action</th></tr></thead><tbody className="divide-y text-sm">{loading ? <tr><td colSpan="4" className="py-20 text-center"></td></tr> : filteredLeads.map(lead => (<tr key={lead._id}><td className="px-6 py-5 font-bold">{formatDate(lead.date)}</td><td className="px-6 py-5"><div className="font-black text-[#0B5D85]">{lead.fullName}</div><div className="text-xs text-slate-500">{lead.mobileNumber}</div></td><td className="px-6 py-5 uppercase font-bold text-[10px] text-[#19628D]">{lead.department}</td><td className="px-6 py-5 text-center"><button onClick={() => handleDeleteLead(lead._id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"><IoTrash size={18} /></button></td></tr>))}</tbody></table></div>
                    ) : activeView === 'doctors' ? (
                        <div className="bg-white rounded-3xl shadow-xl border overflow-hidden"><table className="w-full text-left"><thead className="bg-[#19628D] text-white text-xs uppercase font-bold"><tr><th className="px-6 py-5">Doctor</th><th className="px-6 py-5">Department</th><th className="px-6 py-5">Rank</th><th className="px-6 py-5 text-center">Action</th></tr></thead><tbody className="divide-y text-sm">{loading ? <tr><td colSpan="4" className="py-20 text-center"></td></tr> : filteredDoctors.map(doc => (<tr key={doc._id}><td className="px-6 py-5"><div className="font-black text-[#0B5D85]">Dr. {doc.name}</div><div className="text-xs text-slate-500">{doc.qualification}</div></td><td className="px-6 py-5 uppercase font-bold text-[10px]">{doc.department}</td><td className="px-6 py-5 text-center font-bold text-amber-600">{doc.priority || 0}</td><td className="px-6 py-5 text-center flex gap-2 justify-center"><button onClick={() => handleEditDoctor(doc)} className="text-blue-500 p-2 hover:bg-blue-50 rounded-lg"><IoPencil size={18} /></button><button onClick={() => handleDeleteDoctor(doc._id)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg"><IoTrash size={18} /></button></td></tr>))}</tbody></table></div>
                    ) : activeView === 'departments' ? (
                        <div className="bg-white rounded-3xl shadow-xl border overflow-hidden"><DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}><table className="w-full text-left"><thead className="bg-[#19628D] text-white text-xs uppercase font-bold"><tr><th className="px-4 py-5 text-center">Order</th><th className="px-6 py-5">Department Name</th><th className="px-6 py-5">Slug</th><th className="px-6 py-5 text-center">Action</th></tr></thead><tbody className="divide-y text-sm">{loading ? <tr><td colSpan="4" className="py-20 text-center"></td></tr> : (<SortableContext items={filteredDepartments.map(d => d._id)} strategy={verticalListSortingStrategy}>{filteredDepartments.map(dept => (<SortableDepartmentRow key={dept._id} dept={dept} onEdit={handleEditDept} onDelete={handleDeleteDept} />))}</SortableContext>)}</tbody></table></DndContext></div>
                    ) : activeView === 'ads' ? (
                        <div className="bg-white rounded-3xl shadow-xl border overflow-hidden"><table className="w-full text-left"><thead className="bg-[#19628D] text-white text-xs uppercase font-bold"><tr><th className="px-6 py-5">Page Slug</th><th className="px-6 py-5">Hero Title</th><th className="px-6 py-5 text-center">Action</th></tr></thead><tbody className="divide-y text-sm">{loading ? <tr><td colSpan="3" className="py-20 text-center"></td></tr> : filteredAds.map(page => (<tr key={page._id}><td className="px-6 py-5 font-black text-[#0B5D85]">{page.slug}</td><td className="px-6 py-5 truncate max-w-xs">{page.hero?.title?.replace(/<[^>]*>/g, '')}</td><td className="px-6 py-5 text-center flex gap-2 justify-center"><button onClick={() => handleEditAds(page)} className="text-blue-500 p-2 hover:bg-blue-50 rounded-lg transition-colors"><IoPencil size={18} /></button><button onClick={() => handleDeleteAds(page._id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"><IoTrash size={18} /></button></td></tr>))}</tbody></table></div>
                    ) : activeView === 'seo' ? (
                        <div className="bg-white rounded-3xl shadow-xl border overflow-hidden"><table className="w-full text-left"><thead className="bg-[#19628D] text-white text-xs uppercase font-bold"><tr><th className="px-6 py-5">Page URL Path</th><th className="px-6 py-5">Meta Title</th><th className="px-6 py-5 text-center">Action</th></tr></thead><tbody className="divide-y text-sm">{loading ? <tr><td colSpan="3" className="py-20 text-center"></td></tr> : filteredSeo.map(seo => (<tr key={seo._id}><td className="px-6 py-5 font-black text-[#0B5D85]">{seo.pageUrl}</td><td className="px-6 py-5 truncate max-w-xs">{seo.metaTitle}</td><td className="px-6 py-5 text-center flex gap-2 justify-center"><button onClick={() => handleEditSeo(seo)} className="text-blue-500 p-2 hover:bg-blue-50 rounded-lg transition-colors"><IoPencil size={18} /></button><button onClick={() => handleDeleteSeo(seo._id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"><IoTrash size={18} /></button></td></tr>))}</tbody></table></div>
                    ) : activeView === 'home-page' ? (
                        <div className="bg-white rounded-3xl shadow-xl border p-8 max-w-4xl">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b pb-2">
                                        <h3 className="font-bold text-xl text-[#19628D]">Hero Section</h3>
                                        <button type="button" onClick={handleEditHero} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-100 transition-colors"><IoPencil size={18} /> Edit Hero</button>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border flex items-center gap-6">
                                        <img src={homePageSettings.hero.image ? URL.createObjectURL(homePageSettings.hero.image) : (homePageSettings.hero.currentImage || 'https://via.placeholder.com/150')} className="w-24 h-24 object-cover rounded-xl shadow-sm bg-white border" alt="Hero" />
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Title</div>
                                            <div className="font-bold text-[#19628D] line-clamp-2" dangerouslySetInnerHTML={{ __html: homePageSettings.hero.title || 'No Title Set' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b pb-2">
                                        <h3 className="font-bold text-xl text-[#19628D]">Excellence Section</h3>
                                        <button type="button" onClick={handleEditExcellence} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-100 transition-colors"><IoPencil size={18} /> Edit Excellence</button>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Title</div>
                                        <div className="font-bold text-[#19628D] mb-4">{homePageSettings.excellence.title || 'No Title Set'}</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Description</div>
                                        <div className="text-sm text-slate-600 line-clamp-3">{homePageSettings.excellence.description || 'No Description Set'}</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b pb-2">
                                        <h3 className="font-bold text-xl text-[#19628D]">Care Data</h3>
                                        <button type="button" onClick={() => { setEditingCareIndex(null); setNewCareItem({ title: '', slug: '', description: '', image: null, currentImage: '' }); setIsCareDataModalOpen(true); }} className="px-4 py-2 bg-[#19628D] text-white text-sm rounded-lg font-bold flex items-center gap-2 hover:bg-[#0B5D85] transition-colors"><IoAddCircle size={18} /> Add Care Item</button>
                                    </div>
                                    <div className="bg-white rounded-2xl border overflow-hidden">
                                        <table className="w-full text-left">
                                            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                                                <tr>
                                                    <th className="px-4 py-3 text-center">Image</th>
                                                    <th className="px-4 py-3">Title</th>
                                                    <th className="px-4 py-3">Slug</th>
                                                    <th className="px-4 py-3 text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y text-sm">
                                                {homePageSettings.careData.map((item, idx) => (
                                                    <tr key={idx} className="hover:bg-slate-50">
                                                        <td className="px-4 py-3 text-center flex justify-center"><img src={item.image ? URL.createObjectURL(item.image) : item.currentImage} className="w-10 h-10 object-contain bg-white rounded-lg border p-1" alt="Care" /></td>
                                                        <td className="px-4 py-3 font-bold text-[#19628D]">{item.title}</td>
                                                        <td className="px-4 py-3 text-slate-500">{item.slug}</td>
                                                        <td className="px-4 py-3 text-center flex gap-2 justify-center">
                                                            <button type="button" onClick={() => handleEditCareItem(idx)} className="text-blue-500 p-2 hover:bg-blue-50 rounded-lg"><IoPencil size={18} /></button>
                                                            <button type="button" onClick={() => handleDeleteCareItem(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg"><IoTrash size={18} /></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {homePageSettings.careData.length === 0 && (
                                                    <tr><td colSpan="4" className="text-center py-6 text-slate-400 font-medium">No Care Data items found.</td></tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl shadow-xl border p-8 max-w-2xl">
                            <form onSubmit={handleUpdateSettings} className="space-y-6">
                                <div className="space-y-2"><label className="text-sm font-bold text-[#19628D]">Site Title (Meta Title)</label><input className="w-full px-4 py-3 bg-slate-50 border rounded-xl" value={settings.siteTitle} onChange={e => setSettings({ ...settings, siteTitle: e.target.value })} placeholder="Main Site Title" /></div>
                                <div className="space-y-2"><label className="text-sm font-bold text-[#19628D]">Meta Description</label><textarea rows="3" className="w-full px-4 py-3 bg-slate-50 border rounded-xl" value={settings.metaDescription} onChange={e => setSettings({ ...settings, metaDescription: e.target.value })} placeholder="SEO Description" /></div>
                                <div className="space-y-2"><label className="text-sm font-bold text-[#19628D]">Site Favicon</label><div className="flex items-center gap-4 p-4 bg-slate-50 border rounded-xl border-dashed border-[#19628D]/30">{settings.faviconUrl && <img src={settings.faviconUrl} className="w-12 h-12 object-contain bg-white rounded-lg border p-1" alt="Favicon" />}<label className="flex-1 cursor-pointer"><div className="flex items-center gap-2 text-[#19628D] font-bold"><IoCloudUploadOutline size={20} /> <span>{settings.faviconFile ? settings.faviconFile.name : 'Upload New Favicon'}</span></div><input type="file" className="hidden" onChange={e => setSettings({ ...settings, faviconFile: e.target.files[0] })} /></label></div></div>
                                <button type="submit" disabled={loading} className="w-full py-4 bg-[#19628D] text-white rounded-2xl font-bold shadow-lg shadow-[#19628D]/20 hover:bg-[#0B5D85] transition-all">{loading ? 'Updating...' : 'Save Global Settings'}</button>
                            </form>
                        </div>
                    )}
                </div>
            </main>

            {/* Modals */}
            {isDoctorModalOpen && (<div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"><div className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8"><button onClick={() => setIsDoctorModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><IoClose size={28} /></button><h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#0B5D85]"><IoMedical /> {editingDoctorId ? 'Edit Doctor' : 'Add Doctor'}</h2><form onSubmit={handleAddDoctor} className="grid grid-cols-2 gap-4"><input required className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Name" value={newDoctor.name} onChange={e => setNewDoctor({ ...newDoctor, name: e.target.value })} /><input required className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Qualification" value={newDoctor.qualification} onChange={e => setNewDoctor({ ...newDoctor, qualification: e.target.value })} /><input className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Designation" value={newDoctor.designation} onChange={e => setNewDoctor({ ...newDoctor, designation: e.target.value })} /><input required className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Department" value={newDoctor.department} onChange={e => setNewDoctor({ ...newDoctor, department: e.target.value })} /><input className="px-4 py-3 bg-slate-50 border rounded-xl col-span-2" placeholder="Specialties (comma sep)" value={newDoctor.specialties} onChange={e => setNewDoctor({ ...newDoctor, specialties: e.target.value })} /><input className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Schedule (Time)" value={newDoctor.schedule} onChange={e => setNewDoctor({ ...newDoctor, schedule: e.target.value })} /><input className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Days (e.g. Mon - Sat)" value={newDoctor.days} onChange={e => setNewDoctor({ ...newDoctor, days: e.target.value })} /><input className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Experience (e.g. 10+ Years)" value={newDoctor.experience} onChange={e => setNewDoctor({ ...newDoctor, experience: e.target.value })} /><input type="number" className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Rank" value={newDoctor.priority} onChange={e => setNewDoctor({ ...newDoctor, priority: e.target.value })} /><div className="col-span-2 border-2 border-dashed border-slate-200 p-4 rounded-xl text-center"><label className="cursor-pointer text-[#19628D] font-bold flex flex-col items-center gap-1"><IoCloudUploadOutline size={32} /> <span>{newDoctor.image ? newDoctor.image.name : 'Upload Doctor Photo'}</span><input type="file" className="hidden" onChange={e => setNewDoctor({ ...newDoctor, image: e.target.files[0] })} /></label></div><button type="submit" className="col-span-2 py-4 bg-[#19628D] text-white rounded-2xl font-bold">Save Doctor</button></form></div></div>)}

            {isDeptModalOpen && (<div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"><div className="bg-white w-full max-w-4xl rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8"><button onClick={() => setIsDeptModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><IoClose size={28} /></button><h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#0B5D85]"><IoGrid /> {editingDeptId ? 'Edit Department' : 'Add Department'}</h2><form onSubmit={handleAddDept} className="grid grid-cols-2 gap-4"><input required className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Dept Name" value={newDept.name} onChange={e => setNewDept({ ...newDept, name: e.target.value })} /><input required className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Slug" value={newDept.slug} onChange={e => setNewDept({ ...newDept, slug: e.target.value })} /><input type="number" className="px-4 py-3 bg-slate-50 border rounded-xl col-span-2" placeholder="Priority (Ranking)" value={newDept.priority} onChange={e => setNewDept({ ...newDept, priority: e.target.value })} /><textarea rows="2" className="px-4 py-3 bg-slate-50 border rounded-xl col-span-2" placeholder="Hero Title (HTML supported, e.g. <span>)" value={newDept.heroTitle} onChange={e => setNewDept({ ...newDept, heroTitle: e.target.value })} /><input className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Form Title" value={newDept.heroFormTitle} onChange={e => setNewDept({ ...newDept, heroFormTitle: e.target.value })} /><input className="px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Form Subtitle" value={newDept.heroFormSubtitle} onChange={e => setNewDept({ ...newDept, heroFormSubtitle: e.target.value })} /><textarea rows="2" className="px-4 py-3 bg-slate-50 border rounded-xl col-span-2" placeholder="Concerns (comma sep)" value={newDept.heroConcerns} onChange={e => setNewDept({ ...newDept, heroConcerns: e.target.value })} /><input className="px-4 py-3 bg-slate-50 border rounded-xl col-span-2" placeholder="Care Title" value={newDept.careTitle} onChange={e => setNewDept({ ...newDept, careTitle: e.target.value })} /><textarea rows="3" className="px-4 py-3 bg-slate-50 border rounded-xl col-span-2" placeholder="Care Description" value={newDept.careDescription} onChange={e => setNewDept({ ...newDept, careDescription: e.target.value })} /><textarea rows="2" className="px-4 py-3 bg-slate-50 border rounded-xl col-span-2" placeholder="Care Items (comma sep)" value={newDept.careItems} onChange={e => setNewDept({ ...newDept, careItems: e.target.value })} /><div className="col-span-2 space-y-4"><div className="grid grid-cols-2 gap-4"><div><label className="text-xs font-bold text-[#19628D] ml-1">Hero Image</label><input type="file" className="w-full px-4 py-3 bg-slate-50 border rounded-xl" onChange={e => setNewDept({ ...newDept, heroImageFile: e.target.files[0] })} /></div><div><label className="text-xs font-bold text-[#19628D] ml-1">Care Icon</label><input type="file" className="w-full px-4 py-3 bg-slate-50 border rounded-xl" onChange={e => setNewDept({ ...newDept, careIconFile: e.target.files[0] })} /></div></div><div className="border-t pt-4"><label className="text-xs font-bold uppercase mb-2 block text-[#19628D]">Select Specific Doctors</label><div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto p-4 bg-slate-50 rounded-xl border">{doctors.map(doc => (<div key={doc._id} onClick={() => toggleDoctorSelection(doc._id)} className={`p-2 rounded-lg border cursor-pointer transition-all flex flex-col ${newDept.selectedDoctors.includes(doc._id) ? 'bg-[#19628D] text-white' : 'bg-white text-slate-600'}`}><span className="text-[10px] font-black">Dr. {doc.name}</span></div>))}</div></div></div><button type="submit" className="col-span-2 py-4 bg-[#19628D] text-white rounded-2xl font-bold hover:bg-[#0B5D85]">Save Department</button></form></div></div>)}

            {isAdsModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white w-full max-w-5xl rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8">
                        <button onClick={() => setIsAdsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><IoClose size={28} /></button>
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#0B5D85]"><IoMegaphoneOutline /> {editingAdsId ? `Edit Ads Page: ${newAds.slug}` : 'Create New Ads Page'}</h2>

                        <form onSubmit={handleAddAds} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Basic Info */}
                            <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border col-span-1 md:col-span-2">
                                <h3 className="font-bold text-[#19628D] uppercase tracking-wider text-xs border-b pb-2">0. Page Identification</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-[#19628D] uppercase">URL Slug (unique-id-for-page)</label>
                                        <input required className="w-full px-4 py-3 bg-white border rounded-xl text-sm font-bold text-[#19628D]" placeholder="e.g. orthopedic-surgery" value={newAds.slug} onChange={e => setNewAds({ ...newAds, slug: e.target.value })} disabled={!!editingAdsId} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-[#19628D] uppercase">Info Image Class (optional)</label>
                                        <input className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="e.g. md:w-[60%]" value={newAds.infoImageClass} onChange={e => setNewAds({ ...newAds, infoImageClass: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            {/* Hero Section */}
                            <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border">
                                <h3 className="font-bold text-[#19628D] uppercase tracking-wider text-xs border-b pb-2">1. Hero Section</h3>
                                <textarea rows="2" className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Hero Title (HTML support)" value={newAds.heroTitle} onChange={e => setNewAds({ ...newAds, heroTitle: e.target.value })} />
                                <textarea rows="2" className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Hero Subtitle (HTML support)" value={newAds.heroSubtitle} onChange={e => setNewAds({ ...newAds, heroSubtitle: e.target.value })} />
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-[#19628D] uppercase">Change Hero Image</label>
                                    <input type="file" className="w-full px-4 py-2 bg-white border rounded-lg text-xs" onChange={e => setNewAds({ ...newAds, heroImage: e.target.files[0] })} />
                                </div>
                            </div>

                            {/* Surgery Info Section */}
                            <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border">
                                <h3 className="font-bold text-[#19628D] uppercase tracking-wider text-xs border-b pb-2">2. Surgery Information</h3>
                                <textarea rows="2" className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Info Title" value={newAds.infoTitle} onChange={e => setNewAds({ ...newAds, infoTitle: e.target.value })} />
                                <textarea rows="3" className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Description" value={newAds.infoDescription} onChange={e => setNewAds({ ...newAds, infoDescription: e.target.value })} />
                                <textarea rows="2" className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Side Text" value={newAds.infoSideText} onChange={e => setNewAds({ ...newAds, infoSideText: e.target.value })} />
                                <textarea rows="2" className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Bottom Text" value={newAds.infoBottomText} onChange={e => setNewAds({ ...newAds, infoBottomText: e.target.value })} />
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-[#19628D] uppercase">Change Info Image</label>
                                    <input type="file" className="w-full px-4 py-2 bg-white border rounded-lg text-xs" onChange={e => setNewAds({ ...newAds, infoImage: e.target.files[0] })} />
                                </div>
                            </div>

                            {/* Symptoms Section */}
                            <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border col-span-1 md:col-span-2">
                                <div className="flex items-center justify-between border-b pb-2">
                                    <h3 className="font-bold text-[#19628D] uppercase tracking-wider text-xs">3. Symptoms Illustrations</h3>
                                    <button type="button" onClick={() => setNewAds(prev => ({ ...prev, symptomsItems: [...prev.symptomsItems, { title: '', image: null, currentImage: '' }] }))} className="px-3 py-1 bg-[#19628D] text-white text-[10px] font-bold rounded-lg hover:bg-[#0B5D85] transition-all flex items-center gap-1"><IoAddCircle size={14} /> Add Item</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input className="px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Symptoms Main Title" value={newAds.symptomsTitle} onChange={e => setNewAds({ ...newAds, symptomsTitle: e.target.value })} />
                                    <input className="px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Symptoms Subtitle" value={newAds.symptomsSubtitle} onChange={e => setNewAds({ ...newAds, symptomsSubtitle: e.target.value })} />
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                    {newAds.symptomsItems.map((item, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded-xl border space-y-2 shadow-sm relative group">
                                            <button type="button" onClick={() => setNewAds(prev => ({ ...prev, symptomsItems: prev.symptomsItems.filter((_, i) => i !== idx) }))} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><IoClose size={12} /></button>
                                            <input className="w-full px-2 py-1.5 bg-slate-50 border rounded-lg text-xs font-bold" placeholder={`Symptom ${idx + 1} Title`} value={item.title} onChange={e => {
                                                const items = [...newAds.symptomsItems];
                                                items[idx].title = e.target.value;
                                                setNewAds({ ...newAds, symptomsItems: items });
                                            }} />
                                            <input type="file" className="w-full text-[10px]" onChange={e => {
                                                const items = [...newAds.symptomsItems];
                                                items[idx].image = e.target.files[0];
                                                setNewAds({ ...newAds, symptomsItems: items });
                                            }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits & Doctor Settings */}
                            <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border col-span-1 md:col-span-2">
                                <h3 className="font-bold text-[#19628D] uppercase tracking-wider text-xs border-b pb-2">4. Benefits & Doctors</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <input className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Benefits Title" value={newAds.benefitsTitle} onChange={e => setNewAds({ ...newAds, benefitsTitle: e.target.value })} />
                                        <textarea rows="4" className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Benefits Items (One per line)" value={newAds.benefitsItems} onChange={e => setNewAds({ ...newAds, benefitsItems: e.target.value })} />
                                    </div>
                                    <div className="space-y-4">
                                        <input className="w-full px-4 py-3 bg-white border rounded-xl text-sm" placeholder="Doctors Section Title" value={newAds.doctorsTitle} onChange={e => setNewAds({ ...newAds, doctorsTitle: e.target.value })} />
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-[#19628D] uppercase">Display Dept</label>
                                                <input list="dept-list" className="w-full px-4 py-3 bg-white border rounded-xl text-xs" placeholder="e.g. Orthopaedics" value={newAds.doctorsDepartment} onChange={e => setNewAds({ ...newAds, doctorsDepartment: e.target.value })} />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-[#19628D] uppercase">Form Dept (Leads)</label>
                                                <input list="dept-list" className="w-full px-4 py-3 bg-white border rounded-xl text-xs" placeholder="e.g. orthopaedics-lead" value={newAds.doctorsFormDepartment} onChange={e => setNewAds({ ...newAds, doctorsFormDepartment: e.target.value })} />
                                            </div>
                                            <datalist id="dept-list">
                                                {[...new Set(doctors.map(d => d.department))].filter(Boolean).sort().map(dept => (
                                                    <option key={dept} value={dept} />
                                                ))}
                                            </datalist>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end pt-6 border-t col-span-1 md:col-span-2"><button type="submit" className="px-8 py-3 bg-[#19628D] text-white font-bold rounded-2xl hover:bg-[#0B5D85] transition-colors">{editingAdsId ? 'Update Ads Page' : 'Create Ads Page'}</button></div>
                        </form>
                    </div>
                </div>
            )}

            {isSeoModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl my-8">
                        <button onClick={() => setIsSeoModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><IoClose size={28} /></button>
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#0B5D85]"><IoSearch /> {editingSeoId ? 'Edit SEO Entry' : 'Add SEO Entry'}</h2>
                        <form onSubmit={handleAddSeo} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Page URL Path (e.g. /, /about, /department/orthopedics)</label>
                                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl" placeholder="/" value={newSeo.pageUrl} onChange={e => setNewSeo({ ...newSeo, pageUrl: e.target.value })} disabled={!!editingSeoId} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Meta Title (60-65 chars)</label>
                                <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl" placeholder="e.g. Orthopaedics Care | Bone & Joint Specialists Atreum" value={newSeo.metaTitle} onChange={e => setNewSeo({ ...newSeo, metaTitle: e.target.value })} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Meta Description (150-160 chars)</label>
                                <textarea rows="3" required className="w-full px-4 py-3 bg-slate-50 border rounded-xl" placeholder="Get expert orthopaedic care at Atreum..." value={newSeo.metaDescription} onChange={e => setNewSeo({ ...newSeo, metaDescription: e.target.value })} />
                            </div>
                            <button type="submit" className="w-full py-4 bg-[#19628D] text-white rounded-2xl font-bold hover:bg-[#0B5D85]">Save SEO Settings</button>
                        </form>
                    </div>
                </div>
            )}

            {isCareDataModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl">
                        <button onClick={() => setIsCareDataModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><IoClose size={28} /></button>
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#0B5D85]"><IoMedical /> {editingCareIndex !== null ? 'Edit Care Item' : 'Add Care Item'}</h2>
                        <form onSubmit={handleSaveCareItem} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-[#19628D] uppercase">Title</label>
                                    <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm" placeholder="e.g. Orthopaedics" value={newCareItem.title} onChange={e => setNewCareItem({ ...newCareItem, title: e.target.value })} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-[#19628D] uppercase">Slug (Department ID)</label>
                                    <input required className="w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm" placeholder="e.g. orthopedics" value={newCareItem.slug} onChange={e => setNewCareItem({ ...newCareItem, slug: e.target.value })} />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Description</label>
                                <textarea required rows="4" className="w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm" placeholder="Description of care..." value={newCareItem.description} onChange={e => setNewCareItem({ ...newCareItem, description: e.target.value })} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Care Image</label>
                                <div className="flex items-center gap-4 p-4 border rounded-xl bg-slate-50 border-dashed">
                                    <img src={newCareItem.image ? URL.createObjectURL(newCareItem.image) : newCareItem.currentImage} className="w-16 h-16 object-contain bg-white rounded-lg p-2 border" alt="Care" />
                                    <input type="file" className="w-full" onChange={e => setNewCareItem({ ...newCareItem, image: e.target.files[0] })} />
                                </div>
                            </div>
                            <button type="submit" disabled={loading} className="w-full py-4 mt-4 bg-[#0FB1AB] text-white rounded-2xl font-bold hover:bg-[#0C8F89] shadow-lg shadow-[#0FB1AB]/20 transition-all">{loading ? 'Saving...' : 'Save Care Item'}</button>
                        </form>
                    </div>
                </div>
            )}

            {isHeroModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl">
                        <button onClick={() => setIsHeroModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><IoClose size={28} /></button>
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#0B5D85]"><IoPencil /> Edit Hero Section</h2>
                        <form onSubmit={handleSaveHero} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Hero Title (HTML supported)</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm" value={tempHero.title} onChange={e => setTempHero({ ...tempHero, title: e.target.value })} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Hero Image</label>
                                <div className="flex items-center gap-4 p-4 border rounded-xl bg-slate-50 border-dashed">
                                    <img src={tempHero.image ? URL.createObjectURL(tempHero.image) : tempHero.currentImage} className="w-16 h-16 object-cover bg-white rounded-lg p-1 border" alt="Hero" />
                                    <input type="file" className="w-full" onChange={e => setTempHero({ ...tempHero, image: e.target.files[0] })} />
                                </div>
                            </div>
                            <button type="submit" disabled={loading} className="w-full py-4 mt-4 bg-[#0FB1AB] text-white rounded-2xl font-bold hover:bg-[#0C8F89] shadow-lg shadow-[#0FB1AB]/20 transition-all">{loading ? 'Saving...' : 'Save Hero Section'}</button>
                        </form>
                    </div>
                </div>
            )}

            {isExcellenceModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl">
                        <button onClick={() => setIsExcellenceModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500"><IoClose size={28} /></button>
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-2 text-[#0B5D85]"><IoPencil /> Edit Excellence Section</h2>
                        <form onSubmit={handleSaveExcellence} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Title</label>
                                <input className="w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm" value={tempExcellence.title} onChange={e => setTempExcellence({ ...tempExcellence, title: e.target.value })} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-[#19628D] uppercase">Description</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm" value={tempExcellence.description} onChange={e => setTempExcellence({ ...tempExcellence, description: e.target.value })} />
                            </div>
                            <button type="submit" disabled={loading} className="w-full py-4 mt-4 bg-[#0FB1AB] text-white rounded-2xl font-bold hover:bg-[#0C8F89] shadow-lg shadow-[#0FB1AB]/20 transition-all">{loading ? 'Saving...' : 'Save Excellence Section'}</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
