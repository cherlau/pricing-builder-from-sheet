const mockData = {
    "discounts": [
        {
            "name": "Mensal",
            "label": "mês",
            "value": 0
        },
        {
            "name": "Trimestral",
            "label": "trimestre",
            "value": 12
        },
        {
            "name": "Semestral",
            "label": "semestre",
            "value": 15
        },
        {
            "name": "Anual",
            "label": "ano",
            "value": 20
        }
    ],
    "modules": {
        "gestao_de_produtos": {
            "title": "Gestão de Produtos",
            "items": {
                "informacoes_arquivos_e_imagens": {
                    "nome": "Informações, Arquivos e Imagens",
                    "nome_completo": "Gestão de Produtos - Informações, Arquivos e Imagens",
                    "preco": "365.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "Ilimitado",
                    "gestao_de_empreendimentos": "Ilimitado",
                    "gestao_de_vendas": "Ilimitado",
                    "": "Ilimitado",
                    "label_total": "empreendimento"
                },
                "crm_reservas": {
                    "nome": "CRM (reservas)",
                    "nome_completo": "Gestão de Produtos - CRM (reservas)",
                    "preco": "0.00",
                    "preco_unitario": "0.015",
                    "implantacao": "0.00",
                    "limite": "5000/10000/100000/10000",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "-",
                    "": "+",
                    "label_total": "cliente"
                }
            }
        },
        "gestao_de_vendas": {
            "title": "Gestão de Vendas",
            "items": {
                "espelho_de_vendas_gestao_de_unidades_reservas_e_tabelas": {
                    "nome": "Espelho de Vendas - Gestão de Unidades, Reservas e Tabelas",
                    "nome_completo": "Gestão de Vendas - Espelho de Vendas - Gestão de Unidades, Reservas e Tabelas",
                    "preco": "0.00",
                    "preco_unitario": "65.00",
                    "implantacao": "0.00",
                    "limite": "1/3/50/5",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "empreendimento"
                },
                "espelho_de_vendas_gestao_de_unidades_e_tabelas": {
                    "nome": "Espelho de Vendas - Gestão de Unidades e Tabelas",
                    "nome_completo": "Gestão de Vendas - Espelho de Vendas - Gestão de Unidades e Tabelas",
                    "preco": "0.00",
                    "preco_unitario": "65.00",
                    "implantacao": "0.00",
                    "limite": "1/3/50/5",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "-",
                    "": "+",
                    "label_total": "empreendimento"
                },
                "espelho_de_vendas_disponibilidade_em_tempo_real": {
                    "nome": "Espelho de Vendas - Disponibilidade em Tempo Real",
                    "nome_completo": "Gestão de Vendas - Espelho de Vendas - Disponibilidade em Tempo Real",
                    "preco": "200.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "espelho_de_vendas_link_publico": {
                    "nome": "Espelho de Vendas - Link Público",
                    "nome_completo": "Gestão de Vendas - Espelho de Vendas - Link Público",
                    "preco": "200.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "simulador_e_gestao_de_propostas": {
                    "nome": "Simulador e Gestão de Propostas",
                    "nome_completo": "Gestão de Vendas - Simulador e Gestão de Propostas",
                    "preco": "200.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "geracao_de_documentos_e_contratos": {
                    "nome": "Geração de Documentos e Contratos",
                    "nome_completo": "Gestão de Vendas - Geração de Documentos e Contratos",
                    "preco": "200.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                }
            }
        },
        "gestao_de_atendimentos": {
            "title": "Gestão de Atendimentos",
            "items": {
                "crm": {
                    "nome": "CRM",
                    "nome_completo": "Gestão de Atendimentos - CRM",
                    "preco": "0.00",
                    "preco_unitario": "0.015",
                    "implantacao": "0.00",
                    "limite": "25000/200000/500000/200000",
                    "gestao_de_atendimento": "5000/25000/100000/25000",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "-",
                    "": "-",
                    "label_total": "cliente"
                },
                "crm_funil": {
                    "nome": "CRM (funil)",
                    "nome_completo": "Gestão de Atendimentos - CRM (funil)",
                    "preco": "0.00",
                    "preco_unitario": "0.015",
                    "implantacao": "0.00",
                    "limite": "25000/25000/350000/25000",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "5000/10000/100000/10000",
                    "": "+",
                    "label_total": "cliente"
                },
                "multiplos_funis": {
                    "nome": "Múltiplos Funis",
                    "nome_completo": "Gestão de Atendimentos - Múltiplos Funis",
                    "preco": "0.00",
                    "preco_unitario": "150.00",
                    "implantacao": "0.00",
                    "limite": "1/1/20/3",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "funis adicionai"
                },
                "automatizacao": {
                    "nome": "Automatização",
                    "nome_completo": "Gestão de Atendimentos - Automatização",
                    "preco": "0.00",
                    "preco_unitario": "0.15",
                    "implantacao": "0.00",
                    "limite": "1000/1000/25000/1000",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "requisiçõe"
                },
                "chat": {
                    "nome": "Chat",
                    "nome_completo": "Gestão de Atendimentos - Chat",
                    "preco": "0.00",
                    "preco_unitario": "1.50",
                    "implantacao": "0.00",
                    "limite": "100/100/2000/100",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "cliente"
                },
                "oferta_ativa": {
                    "nome": "Oferta Ativa",
                    "nome_completo": "Gestão de Atendimentos - Oferta Ativa",
                    "preco": "200.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "call_tracking": {
                    "nome": "Call Tracking",
                    "nome_completo": "Gestão de Atendimentos - Call Tracking",
                    "preco": "0.00",
                    "preco_unitario": "125.00",
                    "implantacao": "0.00",
                    "limite": "1/1/20/1",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "número"
                },
                "consulta_credito": {
                    "nome": "Consulta Crédito",
                    "nome_completo": "Gestão de Atendimentos - Consulta Crédito",
                    "preco": "0.00",
                    "preco_unitario": "7.50",
                    "implantacao": "0.00",
                    "limite": "25/25/500/25",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "cliente"
                },
                "geracao_de_documentos": {
                    "nome": "Geração de Documentos",
                    "nome_completo": "Gestão de Atendimentos - Geração de Documentos",
                    "preco": "200.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "-",
                    "": "+",
                    "label_total": "-"
                }
            }
        },
        "gestao_de_comunicacao": {
            "title": "Gestão de Comunicação",
            "items": {
                "novidades": {
                    "nome": "Novidades",
                    "nome_completo": "Gestão de Comunicação - Novidades",
                    "preco": "200.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "✓",
                    "gestao_de_vendas": "✓",
                    "": "✓",
                    "label_total": "-"
                },
                "eventos": {
                    "nome": "Eventos",
                    "nome_completo": "Gestão de Comunicação - Eventos",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "✓",
                    "label_total": "-"
                },
                "clube_de_pontos": {
                    "nome": "Clube de Pontos",
                    "nome_completo": "Gestão de Comunicação - Clube de Pontos",
                    "preco": "200.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                }
            }
        },
        "gestao_de_relacionamento": {
            "title": "Gestão de Relacionamento",
            "items": []
        },
        "gestao_de_usuarios": {
            "title": "Gestão de Usuários",
            "items": {
                "usuarios": {
                    "nome": "Usuários",
                    "nome_completo": "Gestão de Usuários - Usuários",
                    "preco": "0.00",
                    "preco_unitario": "1.50",
                    "implantacao": "0.00",
                    "limite": "50/50/1000/250",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "250/250/5000/250",
                    "label_total": "usuário"
                },
                "usuarios_ativos": {
                    "nome": "Usuários Ativos",
                    "nome_completo": "Gestão de Usuários - Usuários Ativos",
                    "preco": "0.00",
                    "preco_unitario": "1.50",
                    "implantacao": "0.00",
                    "limite": "50/50/1000/250",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "-",
                    "": "250/250/5000/250",
                    "label_total": "usuário"
                },
                "usuarios_ilimitados": {
                    "nome": "Usuários Ilimitados",
                    "nome_completo": "Gestão de Usuários - Usuários Ilimitados",
                    "preco": "1500.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "usuário"
                }
            }
        },
        "marketing": {
            "title": "Marketing",
            "items": {
                "site_incorporadora": {
                    "nome": "Site Incorporadora",
                    "nome_completo": "Marketing - Site Incorporadora",
                    "preco": "400.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "site_loteadora": {
                    "nome": "Site Loteadora",
                    "nome_completo": "Marketing - Site Loteadora",
                    "preco": "400.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "hotsite_personalizado_para_corretor": {
                    "nome": "Hotsite Personalizado para Corretor",
                    "nome_completo": "Marketing - Hotsite Personalizado para Corretor",
                    "preco": "330.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "✓",
                    "gestao_de_vendas": "✓",
                    "": "+",
                    "label_total": "-"
                },
                "facebook_instagram": {
                    "nome": "Facebook/Instagram",
                    "nome_completo": "Marketing - Facebook/Instagram",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "integracao_site": {
                    "nome": "Integração Site",
                    "nome_completo": "Marketing - Integração Site",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "chat_whatsapp": {
                    "nome": "Chat WhatsApp",
                    "nome_completo": "Marketing - Chat WhatsApp",
                    "preco": "100.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "portal_imobiliario_imoveis": {
                    "nome": "Portal Imobiliário (imóveis)",
                    "nome_completo": "Marketing - Portal Imobiliário (imóveis)",
                    "preco": "100.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "portal_imobiliario_leads": {
                    "nome": "Portal Imobiliário (leads)",
                    "nome_completo": "Marketing - Portal Imobiliário (leads)",
                    "preco": "100.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "rd_station": {
                    "nome": "RD Station",
                    "nome_completo": "Marketing - RD Station",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                }
            }
        },
        "relatorios": {
            "title": "Relatórios",
            "items": {
                "planilha": {
                    "nome": "Planilha",
                    "nome_completo": "Relatórios - Planilha",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "✓",
                    "gestao_de_vendas": "✓",
                    "": "✓",
                    "label_total": "-"
                },
                "bi": {
                    "nome": "BI",
                    "nome_completo": "Relatórios - BI",
                    "preco": "330.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "✓",
                    "": "✓",
                    "label_total": "-"
                }
            }
        },
        "integracoes": {
            "title": "Integrações",
            "items": {
                "docusign": {
                    "nome": "DocuSign",
                    "nome_completo": "Integrações - DocuSign",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "clicksign": {
                    "nome": "Clicksign",
                    "nome_completo": "Integrações - Clicksign",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "d4sign": {
                    "nome": "D4Sign",
                    "nome_completo": "Integrações - D4Sign",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "assine_online": {
                    "nome": "Assine.Online",
                    "nome_completo": "Integrações - Assine.Online",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "fonte_de_dados_para_bi": {
                    "nome": "Fonte de Dados Para BI",
                    "nome_completo": "Integrações - Fonte de Dados Para BI",
                    "preco": "100.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "integracao_webhook": {
                    "nome": "Integração Webhook",
                    "nome_completo": "Integrações - Integração Webhook",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "api_publica": {
                    "nome": "API Pública",
                    "nome_completo": "Integrações - API Pública",
                    "preco": "0.00",
                    "preco_unitario": "1.50",
                    "implantacao": "0.00",
                    "limite": "50/50/150/50",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "requisições por minuto"
                },
                "data_lake_ate_5gb_por_dia_e_150gb_no_mes": {
                    "nome": "Data Lake - até 5GB por dia e 150GB no mês",
                    "nome_completo": "Integrações - Data Lake - até 5GB por dia e 150GB no mês",
                    "preco": "595.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "-",
                    "": "+",
                    "label_total": "-"
                },
                "data_lake_ate_25gb_por_dia_e_750gb_no_mes": {
                    "nome": "Data Lake - até 25GB por dia e 750GB no mês",
                    "nome_completo": "Integrações - Data Lake - até 25GB por dia e 750GB no mês",
                    "preco": "1125.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "-",
                    "": "+",
                    "label_total": "-"
                },
                "data_lake_ate_100gb_por_dia_e_3_000gb_no_mes": {
                    "nome": "Data Lake - até 100GB por dia e 3.000GB no mês",
                    "nome_completo": "Integrações - Data Lake - até 100GB por dia e 3.000GB no mês",
                    "preco": "2115.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "-",
                    "gestao_de_vendas": "-",
                    "": "+",
                    "label_total": "-"
                },
                "erp_uau": {
                    "nome": "ERP UAU",
                    "nome_completo": "Integrações - ERP UAU",
                    "preco": "400.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "erp_informakon": {
                    "nome": "ERP Informakon",
                    "nome_completo": "Integrações - ERP Informakon",
                    "preco": "400.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "-",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "erp_sienge": {
                    "nome": "ERP Sienge",
                    "nome_completo": "Integrações - ERP Sienge",
                    "preco": "400.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "api4com": {
                    "nome": "Api4Com",
                    "nome_completo": "Integrações - Api4Com",
                    "preco": "65.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                }
            }
        },
        "aplicativos": {
            "title": "Aplicativos",
            "items": {
                "app_facilita_vendas_ios_e_android": {
                    "nome": "App Facilita Vendas (iOS e Android)",
                    "nome_completo": "Aplicativos - App Facilita Vendas (iOS e Android)",
                    "preco": "0.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "✓",
                    "gestao_de_vendas": "✓",
                    "": "✓",
                    "label_total": "-"
                },
                "app_exclusivo_ios": {
                    "nome": "App Exclusivo iOS",
                    "nome_completo": "Aplicativos - App Exclusivo iOS",
                    "preco": "330.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                },
                "app_exclusivo_android": {
                    "nome": "App Exclusivo Android",
                    "nome_completo": "Aplicativos - App Exclusivo Android",
                    "preco": "330.00",
                    "preco_unitario": "0.00",
                    "implantacao": "0.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "+",
                    "label_total": "-"
                }
            }
        },
        "consultoria": {
            "title": "Consultoria",
            "items": {
                "2_horas": {
                    "nome": "2 horas",
                    "nome_completo": "Consultoria - 2 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "575.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "4_horas": {
                    "nome": "4 horas",
                    "nome_completo": "Consultoria - 4 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "1150.00",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "✓",
                    "gestao_de_vendas": "✓",
                    "": "-",
                    "label_total": "-"
                },
                "6_horas": {
                    "nome": "6 horas",
                    "nome_completo": "Consultoria - 6 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "1725.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "8_horas": {
                    "nome": "8 horas",
                    "nome_completo": "Consultoria - 8 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "2300.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "10_horas": {
                    "nome": "10 horas",
                    "nome_completo": "Consultoria - 10 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "2875.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "simulador_de_propostas_5_horas": {
                    "nome": "Simulador de Propostas - 5 horas",
                    "nome_completo": "Consultoria - Simulador de Propostas - 5 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "1437.50",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "geracao_de_documentos_4_horas": {
                    "nome": "Geração de Documentos - 4 horas",
                    "nome_completo": "Consultoria - Geração de Documentos - 4 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "1150.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "relatorio_bi_1_hora": {
                    "nome": "Relatório BI - 1 hora",
                    "nome_completo": "Consultoria - Relatório BI - 1 hora",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "287.50",
                    "limite": "-",
                    "gestao_de_atendimento": "✓",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "✓",
                    "": "-",
                    "label_total": "-"
                },
                "funil_personalizado_3_horas": {
                    "nome": "Funil Personalizado - 3 horas",
                    "nome_completo": "Consultoria - Funil Personalizado - 3 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "862.50",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "✓",
                    "": "-",
                    "label_total": "-"
                },
                "integracao_erp_uau_23_horas": {
                    "nome": "Integração ERP UAU - 23 horas",
                    "nome_completo": "Consultoria - Integração ERP UAU - 23 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "6612.50",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "integracao_erp_informakon_13_horas": {
                    "nome": "Integração ERP Informakon - 13 horas",
                    "nome_completo": "Consultoria - Integração ERP Informakon - 13 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "3737.50",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "integracao_erp_sienge_13_horas": {
                    "nome": "Integração ERP Sienge - 13 horas",
                    "nome_completo": "Consultoria - Integração ERP Sienge - 13 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "3737.50",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "aplicativo_exclusivo_20_horas": {
                    "nome": "Aplicativo Exclusivo - 20 horas",
                    "nome_completo": "Consultoria - Aplicativo Exclusivo - 20 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "5750.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "fonte_de_dados_para_bi_4_horas": {
                    "nome": "Fonte de Dados para BI - 4 horas",
                    "nome_completo": "Consultoria - Fonte de Dados para BI - 4 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "1150.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "api_publica_3_horas": {
                    "nome": "API Pública - 3 horas",
                    "nome_completo": "Consultoria - API Pública - 3 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "862.50",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "integracoes_de_marketing_2_horas": {
                    "nome": "Integrações de Marketing - 2 horas",
                    "nome_completo": "Consultoria - Integrações de Marketing - 2 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "575.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "data_lake_12_horas": {
                    "nome": "Data Lake - 12 horas",
                    "nome_completo": "Consultoria - Data Lake - 12 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "3450.00",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                },
                "site_5_horas": {
                    "nome": "Site - 5 horas",
                    "nome_completo": "Consultoria - Site - 5 horas",
                    "preco": "",
                    "preco_unitario": "",
                    "implantacao": "1437.50",
                    "limite": "-",
                    "gestao_de_atendimento": "+",
                    "gestao_de_empreendimentos": "+",
                    "gestao_de_vendas": "+",
                    "": "-",
                    "label_total": "-"
                }
            }
        }
    },
    "plans": {
        "gestao_de_atendimento": {
            "title": "Gestão de Atendimento",
            "items": [
                "informacoes_arquivos_e_imagens",
                "crm",
                "novidades",
                "bi",
                "planilha",
                "facebook_instagram",
                "integracao_site",
                "app_facilita_vendas_ios_e_android",
                "usuarios",
                "chat_whatsapp",
                "4_horas",
                "funil_personalizado_3_horas",
                "relatorio_bi_1_hora",
                "integracoes_de_marketing_2_horas",
                "docusign",
                "automatizacao",
                "hotsite_personalizado_para_corretor"
            ]
        },
        "gestao_de_empreendimentos": {
            "title": "Gestão de Empreendimentos",
            "items": [
                "usuarios_ativos",
                "espelho_de_vendas_gestao_de_unidades_e_tabelas",
                "novidades",
                "planilha",
                "informacoes_arquivos_e_imagens",
                "app_facilita_vendas_ios_e_android",
                "hotsite_personalizado_para_corretor",
                "crm_reservas",
                "4_horas",
                "api_publica"
            ]
        },
        "gestao_de_vendas": {
            "title": "Gestão de Vendas",
            "items": [
                "informacoes_arquivos_e_imagens",
                "app_facilita_vendas_ios_e_android",
                "usuarios",
                "espelho_de_vendas_gestao_de_unidades_reservas_e_tabelas",
                "crm_funil",
                "facebook_instagram",
                "integracao_site",
                "simulador_e_gestao_de_propostas",
                "geracao_de_documentos_e_contratos",
                "novidades",
                "planilha",
                "bi",
                "hotsite_personalizado_para_corretor",
                "docusign",
                "chat_whatsapp",
                "4_horas",
                "funil_personalizado_3_horas",
                "simulador_de_propostas_5_horas",
                "geracao_de_documentos_4_horas",
                "relatorio_bi_1_hora",
                "integracoes_de_marketing_2_horas",
                "automatizacao"
            ]
        }
    },
    "compare": [
        [
            "MÓDULOS - RECURSOS - SERVIÇOS",
            "PLANO BÁSICO",
            "PLANO START",
            "PLANO LIGHT",
            "PLANO PREMIUM",
            "PLANO CORPORATE"
        ],
        [
            "Implantação Personalizada",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Apoio CS",
            "-",
            "-",
            "-",
            "Mensal",
            "Semanal"
        ],
        [
            "Apoio Consultivo",
            "-",
            "-",
            "-",
            "-",
            "✓"
        ],
        [
            "Suporte",
            "-",
            "E-mail",
            "Email / Telefone",
            "Email / Telefone / Whatsapp",
            "Email / Telefone / Whatsapp"
        ],
        [
            "Usuários",
            "Ilimitados",
            "Ilimitados",
            "Ilimitados",
            "Ilimitados",
            "Ilimitados"
        ],
        [
            "Gestão de Produtos - Informações Arquivos e Imagens",
            "Até 05 cadastros",
            "Até 100 cadastros",
            "Ilimitado",
            "Ilimitado",
            "Ilimitado"
        ],
        [
            "Gestão de Vendas - Espelho de Vendas - Gestão de Unidades, Reservas e Tabelas",
            "-",
            "Até 01 Empreendimento",
            "Até 05 Empreendimentos",
            "Até 15 Empreendimentos",
            "Até 30 Empreendimentos"
        ],
        [
            "Gestão de Vendas - Simulador e Gestão de Propostas",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Gestão de Vendas - Geração de Documentos e Contratos",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Gestão de Atendimentos - CRM",
            "Até 1.000 negócios\nFunil padrão\nFuxo de trabalho padrão",
            "Até 5.000 negócios\nFunil padrão\nFuxo de trabalho padrão",
            "Até 25.000 negócios\nFunil padrão\nFuxo de trabalho padrão",
            "Até 100.000 negócios\nFunil personalizado\nFuxo de trabalho personalizado",
            "Até 200.000 negócios\nFunil personalizado\nFuxo de trabalho personalizado"
        ],
        [
            "Gestão de Atendimento - Chat",
            "Até 50 Leads",
            "Até 50 Leads",
            "Até 50 Leads",
            "Até 50 Leads",
            "Até 50 Leads"
        ],
        [
            "Gestão de Atendimento - Oferta Ativa",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Gestão de Atendimentos - Call Tracking",
            "-",
            "-",
            "-",
            "1 Linha",
            "1 Linha"
        ],
        [
            "Gestão de Atendimento - Consulta Crédito / SPC / Serasa",
            "-",
            "-",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Gestão de Atendimento - Assinatura Digital",
            "-",
            "-",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Gestão de Comunicação - Novidades",
            "-",
            "-",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Gestão de Comunicação - Eventos",
            "-",
            "-",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Gestão de Comunicação - Clube de Pontos",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Relatórios - Excel",
            "-",
            "-",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Relatórios - BI",
            "-",
            "-",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - ERP Sienge",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Integrações - ERP UAU",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Integrações - Facebook / Instagram",
            "-",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - Fonte de Dados Para BI",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Integrações - Integração Webhook",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Integrações - Zapier",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Integrações - Portal Imobiliário - Grupo Zap Imóveis",
            "-",
            "-",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - Portal Imobiliário - Imóvel Web",
            "-",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - Portal Imobiliário - Lançamento Online",
            "-",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - Portal Imobiliário - Moving Imóveis",
            "-",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - Portal Imobiliário - Viva Real",
            "-",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - Portal Imobiliário - Wimóveis",
            "-",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - Portal Imobiliário - ZL - Imóveis",
            "-",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Integrações - RD Station",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Integrações - Site",
            "-",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Aplicativo - Facilita Vendas (Android e iOS)",
            "✓",
            "✓",
            "✓",
            "✓",
            "✓"
        ],
        [
            "Aplicativo - Exclusivo iOS",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Aplicativo - Exclusivo Android",
            "-",
            "-",
            "-",
            "✓",
            "✓"
        ],
        [
            "Valor Mensal",
            "R$ 0,00",
            "R$ 250,00",
            "R$ 750,00",
            "R$ 1.500,00",
            "R$ 3.500,00"
        ]
    ],
    "id": "construtoras-7"
}

export default mockData;
