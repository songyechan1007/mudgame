package org.syc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.syc.dto.MemberDTO;
import org.syc.dao.MemberDao;
@Service
public class MemberServiceImpl implements MemberService{
	@Autowired
	MemberDao mdao;
	public void memberJoin(MemberDTO mdto) {
		 mdao.memberJoin(mdto);
	}
	public MemberDTO memberLogin(MemberDTO mdto) {
		return mdao.memberLogin(mdto);
	}
	@Override
	public MemberDTO idOverRapCheck(String id) {
		return mdao.idOverRapCheck(id);
	}
	
	public void removeMember(String id) {
		mdao.removeMember(id);
	}
	
	public void updateHavePlayer(String id) {
		mdao.updateHavePlayer(id);
	}
}
